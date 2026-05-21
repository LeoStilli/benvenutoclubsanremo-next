import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'benvenuto-club-sanremo',
  title: 'Benvenuto Club Sanremo',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Events section
            S.listItem()
              .title('Events')
              .icon(() => '📅')
              .child(
                S.documentList()
                  .title('All Events')
                  .filter('_type == "event"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),

            // Quick access to featured events
            S.listItem()
              .title('Featured Events')
              .icon(() => '⭐')
              .child(
                S.documentList()
                  .title('Featured Events')
                  .filter('_type == "event" && featured == true')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),

            // Active events only
            S.listItem()
              .title('Active Events')
              .icon(() => '✅')
              .child(
                S.documentList()
                  .title('Active Events')
                  .filter('_type == "event" && status == "active"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),
          ])
    }),
    visionTool(), // Query tool for debugging
  ],

  schema,

  document: {
    // Use default document actions for now
    actions: (prev) => prev
  }
})