import type { CollectionConfig } from 'payload'

export const Popular_FAQ: CollectionConfig = {
  slug: 'popular_faq',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'richtext',
      required: true,
    },
  ],
}
