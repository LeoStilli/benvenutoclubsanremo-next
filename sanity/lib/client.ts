import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper function to build image URLs from Sanity image objects.
// Our queries dereference the asset (asset->{_id, url}), so use the url field directly.
export function urlFor(source: any) {
  return source?.asset?.url ?? ''
}