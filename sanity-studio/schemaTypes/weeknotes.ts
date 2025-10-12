import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'weeknotes',
  title: 'Weeknotes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Weeknotes #001" or "w/w 25"',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    // Work section (just H2, no subsections)
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [{type: 'block'}],
    }),    

    // Work section (just H2, no subsections)
    defineField({
      name: 'work',
      title: 'Work 💼',
      type: 'array',
      of: [{type: 'block'}],
    }),
    
    // Read section (H2 with nested H3s)
    defineField({
      name: 'read',
      title: 'Read 📚',
      type: 'object',
      fields: [
        {
          name: 'work',
          title: 'Work',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'fun',
          title: 'Fun',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
    
    // Listen section (H2 with nested H3s)
    defineField({
      name: 'listen',
      title: 'Listen 🎧',
      type: 'object',
      fields: [
        {
          name: 'learn',
          title: 'Learn',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'music',
          title: 'Music',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
    
    // Play section (H2 with nested H3s)
    defineField({
      name: 'play',
      title: 'Play 🕹️📖📺💻',
      type: 'object',
      fields: [
        {
          name: 'sports',
          title: 'Sports',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'watch',
          title: 'Watch',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'other',
          title: 'Other',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
    
    // Executive Learning (just H2, no subsections)
    defineField({
      name: 'executiveLearning',
      title: 'Executive Learning 🧠',
      type: 'array',
      of: [{type: 'block'}],
    }),]})