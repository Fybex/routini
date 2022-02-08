import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import imageComponent from './image-component'

export default Node.create({
  name: 'ImageResizeWrapper',

  group: 'block',

  atom: true,

  defining: true,

  addCommands() {
    return {
      setImageResizeWrapper: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'ImageResizeWrapper',
      },
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    return ['ImageResizeWrapper', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(imageComponent)
  },
})