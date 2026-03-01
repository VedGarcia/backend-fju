import type { GlobalConfig } from 'payload'

export const Organization: GlobalConfig = {
    slug: 'organization',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'summary',
            type: 'richText',
            required: true,
        },
        {
            name: 'youtubeChannelId',
            type: 'text',
            admin: { description: 'ID del canal para el feed dinámico' }
        },
    ],
}