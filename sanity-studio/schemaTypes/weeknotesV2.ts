import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'weeknotesV2',
  title: 'Weeknotes V2',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Weeknotes #001"',
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
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Introduction
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // Work section
    defineField({
      name: 'work',
      title: 'Work 💼',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // Read section with subsections
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

    // Listen section with subsections
    defineField({
      name: 'listen',
      title: 'Listen 🎧',
      type: 'object',
      fields: [
        {
          name: 'focus',
          title: 'Focus',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'music',
          title: 'Music',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'spotifyTrack',
              title: 'Spotify Track',
              fields: [
                {
                  name: 'spotifyUrl',
                  title: 'Spotify URL',
                  type: 'url',
                  description: 'Paste a Spotify track URL (e.g. https://open.spotify.com/track/...)',
                },
                {
                  name: 'artist',
                  title: 'Artist',
                  type: 'string',
                },
                {
                  name: 'song',
                  title: 'Song Name',
                  type: 'string',
                },
                {
                  name: 'rating',
                  title: 'Rating (1-5)',
                  type: 'number',
                  validation: (Rule) => Rule.min(1).max(5),
                },
                {
                  name: 'genre',
                  title: 'Genre',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  title: 'artist',
                  subtitle: 'song',
                },
              },
            },
          ],
        },
      ],
    }),

    // Play section with subsections
    defineField({
      name: 'play',
      title: 'Play 🕹️',
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
          of: [
            {
              type: 'object',
              name: 'watchItem',
              title: 'Watch Item',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'rating',
                  title: 'Rating (1-5)',
                  type: 'number',
                  validation: (Rule) => Rule.min(1).max(5),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'rating',
                },
                prepare({title, subtitle}) {
                  return {
                    title,
                    subtitle: subtitle ? '★'.repeat(subtitle) : '',
                  }
                },
              },
            },
          ],
        },
        {
          name: 'other',
          title: 'Other',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
  ],
})
