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
      name: 'excerpt',
      description: 'Write a short pararaph of this post (For SEO Purposes)',
      title: 'Excerpt',
      rows: 5,
      type: 'text',
    },
    {
      name: 'introduction',
      title: 'Introduction',
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
      name: 'desktopImage',
      title: 'Desktop image mock',
      type: 'image',
      group: 'mock-images',
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
      name: 'tabletImage',
      title: 'Tablet image mock',
      type: 'image',
      group: 'mock-images',
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
      name: 'galleryFullWidthDesktop',
      title: 'Gallery - Wide Image (Desktop)',
      type: 'image',
      group: 'gallery',
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
      name: 'galleryFullWidthMobile',
      title: 'Gallery - Wide Image (Mobile)',
      type: 'image',
      group: 'gallery',
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
