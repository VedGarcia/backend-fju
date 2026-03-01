import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        }, {
            name: 'resumen',
            type: 'text',
        }, {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        }, {
            name: 'banner',
            type: 'upload',
            relationTo: 'media',
        }, {
            name: 'description',
            type: 'text',
        }, {
            name: 'link',
            type: 'text',
        },
    ],
}