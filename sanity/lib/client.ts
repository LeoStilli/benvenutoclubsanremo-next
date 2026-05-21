import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper function to build image URLs from Sanity image objects
export function urlFor(source: any) {
  if (!source || !source.asset) return ''

  const { projectId, dataset } = client.config()
  const imageId = source.asset._ref
  const [id, dimensions, format] = imageId.split('-')

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
}