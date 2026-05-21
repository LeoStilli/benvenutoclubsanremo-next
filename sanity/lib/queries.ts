import { groq } from 'next-sanity'

// Base event fields that match the original Event interface
const eventFields = groq`
  _id,
  title,
  date,
  time,
  location,
  cost,
  coordinators,
  description,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  status,
  featured,
  maxCapacity,
  publishedAt
`

// Get all published events, ordered by date
export const allEventsQuery = groq`
  *[_type == "event" && publishedAt <= now()] | order(date asc) {
    ${eventFields}
  }
`

// Get upcoming events (future dates only)
export const upcomingEventsQuery = groq`
  *[_type == "event" && publishedAt <= now() && date >= now()] | order(date asc) {
    ${eventFields}
  }
`

// Get featured events
export const featuredEventsQuery = groq`
  *[_type == "event" && publishedAt <= now() && featured == true] | order(date asc) {
    ${eventFields}
  }
`

// Get active events only (not cancelled or postponed)
export const activeEventsQuery = groq`
  *[_type == "event" && publishedAt <= now() && status == "active"] | order(date asc) {
    ${eventFields}
  }
`

// Get upcoming active events (for homepage)
export const upcomingActiveEventsQuery = groq`
  *[_type == "event" && publishedAt <= now() && status == "active" && date >= now()] | order(date asc) [0...3] {
    ${eventFields}
  }
`

// Get single event by ID
export const eventByIdQuery = groq`
  *[_type == "event" && _id == $id][0] {
    ${eventFields}
  }
`