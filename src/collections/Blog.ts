import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
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
      name: 'author',
      type: 'text',
      required: true,
      defaultValue: 'by Nubes team',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },

    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'eSIM Guide',
          value: 'eSIM Guide',
        },
        {
          label: 'Travel Tips',
          value: 'Travel Tips',
        },
        {
          label: 'Mobile Tech',
          value: 'Mobile Tech',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'richtext',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
  },
}
