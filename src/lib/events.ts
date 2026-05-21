import { client, urlFor } from '../../sanity/lib/client'
import { upcomingActiveEventsQuery, allEventsQuery, activeEventsQuery } from '../../sanity/lib/queries'

// Type that matches the original Event interface
export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  cost?: string
  coordinators: string
  description: string
  image: string
  status?: 'active' | 'cancelled' | 'postponed'
  featured?: boolean
  maxCapacity?: number
}

// Transform Sanity event to match the original Event interface
function transformSanityEvent(sanityEvent: any): Event {
  return {
    id: sanityEvent._id,
    title: sanityEvent.title,
    date: sanityEvent.date,
    time: sanityEvent.time,
    location: sanityEvent.location,
    cost: sanityEvent.cost,
    coordinators: sanityEvent.coordinators,
    description: sanityEvent.description,
    image: sanityEvent.image ? urlFor(sanityEvent.image) : '/placeholder-event.jpg',
    status: sanityEvent.status || 'active',
    featured: sanityEvent.featured || false,
    maxCapacity: sanityEvent.maxCapacity
  }
}

// Get upcoming active events for homepage (max 3)
export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const sanityEvents = await client.fetch(upcomingActiveEventsQuery)
    return sanityEvents.map(transformSanityEvent)
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
}

// Get all events
export async function getAllEvents(): Promise<Event[]> {
  try {
    const sanityEvents = await client.fetch(allEventsQuery)
    return sanityEvents.map(transformSanityEvent)
  } catch (error) {
    console.error('Error fetching all events:', error)
    return []
  }
}

// Get active events only
export async function getActiveEvents(): Promise<Event[]> {
  try {
    const sanityEvents = await client.fetch(activeEventsQuery)
    return sanityEvents.map(transformSanityEvent)
  } catch (error) {
    console.error('Error fetching active events:', error)
    return []
  }
}

// Fallback to original hardcoded events if Sanity is not available
export async function getEventsWithFallback(): Promise<Event[]> {
  try {
    const events = await getUpcomingEvents()

    // If no events from Sanity, return empty array or you could add fallback logic here
    if (events.length === 0) {
      console.log('No events found in Sanity CMS')
      return []
    }

    return events
  } catch (error) {
    console.error('Error fetching events, using fallback:', error)
    return []
  }
}