import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'The name of your event (e.g., "Italian Film Night")',
      validation: (rule) => rule.required().min(3).max(100)
    }),

    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      description: 'When is this event happening?',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'time',
      title: 'Start Time',
      type: 'string',
      description: 'What time does the event start? (e.g., "6:30 PM")',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where is the event taking place?',
      validation: (rule) => rule.required().min(5).max(100)
    }),

    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'string',
      description: 'How much does it cost? Leave empty if free (e.g., "€20" or "€15 for members")',
    }),

    defineField({
      name: 'coordinators',
      title: 'Event Coordinators',
      type: 'string',
      description: 'Who is organizing this event? (e.g., "Anna & Roberta")',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      description: 'Tell people what this event is about. Keep it engaging!',
      validation: (rule) => rule.required().min(20).max(500),
      rows: 4
    }),

    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      description: 'Upload a beautiful image for this event',
      options: {
        hotspot: true, // Allows cropping
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility',
        })
      ],
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      description: 'Is this event active, cancelled, or postponed?',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Postponed', value: 'postponed' }
        ],
        layout: 'radio'
      },
      initialValue: 'active',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Should this event be highlighted on the homepage?',
      initialValue: false
    }),

    defineField({
      name: 'maxCapacity',
      title: 'Maximum Capacity',
      type: 'number',
      description: 'How many people can attend? (optional)',
      validation: (rule) => rule.positive()
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When should this event be visible to the public?',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required()
    })
  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      status: 'status',
      media: 'image'
    },
    prepare({ title, date, status, media }) {
      const statusEmoji = status === 'cancelled' ? '❌' : status === 'postponed' ? '⏰' : '✅'
      return {
        title: title,
        subtitle: `${statusEmoji} ${date} - ${status}`,
        media: media
      }
    }
  },

  orderings: [
    {
      title: 'Event Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Event Date (Oldest)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    }
  ]
})