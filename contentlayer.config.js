import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    technologies: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    githubUrl: {
      type: 'string',
    },
    liveUrl: {
      type: 'string',
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})