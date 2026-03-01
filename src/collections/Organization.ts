import type { CollectionConfig } from 'payload'

export const Organization: CollectionConfig = {
  slug: 'organization',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
  ],
}