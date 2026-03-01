import type { CollectionConfig } from 'payload';
import { isAdminOrSubscriber } from '../access/roles';

export const ProjectPage: CollectionConfig = {
    slug: 'project-page',
    access: {
        read: isAdminOrSubscriber,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'isProtected',
            type: 'checkbox',
            defaultValue: false,
            label: 'Requiere Login?',
        },
        {
            name: 'layout', type: 'blocks', blocks: [
                {
                    slug: 'content',
                    fields: [
                        { name: 'body', type: 'richText' },
                    ],
                },
                {
                    slug: 'gallery',
                    fields: [
                        {
                            name: 'images', type: 'array', fields: [
                                { name: 'image', type: 'upload', relationTo: 'media' },
                            ]
                        },
                    ],
                },
            ]
        }
    ],
}