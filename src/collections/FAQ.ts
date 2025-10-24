import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
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
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Get set',
          value: 'Get set',
        },
        {
          label: 'Compatibility',
          value: 'Compatibility',
        },
        {
          label: 'eSIM Settings & Installation Guide',
          value: 'eSIM Settings & Installation Guide',
        },
        {
          label: 'About Nubes',
          value: 'About Nubes',
        },
        {
          label: 'ComHelp & Supportpatibility',
          value: 'Help & Support',
        },
        {
          label: 'Account and Billing',
          value: 'Account and Billing',
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
}
