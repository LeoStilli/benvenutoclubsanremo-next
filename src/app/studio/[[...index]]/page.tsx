/**
 * This route is responsible for the embedded Sanity Studio that's mounted on the `/studio` route
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-dynamic'

export { metadata } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}