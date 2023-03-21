export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  groups: [
    {
      name: 'mock-images',
      title: 'Mock Images',
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
    },
  ],
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'href',
      title: 'Link',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'repo',
      title: 'Repo',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'excerpt',
      description: 'Write a short pararaph of this post (For SEO Purposes)',
      title: 'Excerpt',
      rows: 5,
      type: 'text',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'process',
      title: 'Process',
      type: 'text',
    },
    {
      name: 'processImages',
      title: 'Process Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'functionality',
      title: 'Functionality',
      type: 'text',
    },
    {
      name: 'functionalityImages',
      title: 'Functionality Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
}
