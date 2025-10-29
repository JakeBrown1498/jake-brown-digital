import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'e.g. "Ciao, my name is Jake Brown."',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro Text',
      type: 'text',
      rows: 3,
    }),
    
    // Services Section
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    
    // Featured Weeknotes
    defineField({
      name: 'featuredWeeknotes',
      title: 'Featured Weeknotes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'weeknotes'}],
        },
      ],
      validation: (Rule) => Rule.max(3),
      description: 'Select up to 3 weeknotes to feature',
    }),
    
    // Contact Section
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
      initialValue: 'Contact me',
    }),
    defineField({
      name: 'contactIntro',
      title: 'Contact Intro Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'contactPoints',
      title: 'Contact Points',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet points above the form',
    }),
    
    // Social Links
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
      ],
    }),
  ],
  
  // Only allow one homepage document
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})