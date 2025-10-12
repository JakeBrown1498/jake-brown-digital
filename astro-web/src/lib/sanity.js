import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: '9o9dd9c0',  // paste your ID here
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})