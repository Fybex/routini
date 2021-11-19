import { Node, mergeAttributes, wrappingInputRule } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from './task-item-component'

export const inputRegex = /^\s*(\[([ |x])\])\s$/

export default Node.create({
    name: 'reactComponent',

    group: 'block',

    content() {
        return this.options.nested ? 'paragraph block*' : 'paragraph+'
    },

    parseHTML() {
        return [
            {
                tag: 'react-component',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['react-component', mergeAttributes(HTMLAttributes), 0]
    },

    addKeyboardShortcuts() {
        const shortcuts = {
            Enter: () => this.editor.commands.splitListItem('reactComponent'),
            'Shift-Tab': () => this.editor.commands.liftListItem('reactComponent'),
        }

        if (!this.options.nested) {
            return shortcuts
        }

        return {
            ...shortcuts,
            Tab: () => this.editor.commands.sinkListItem('reactComponent'),
        }
    },

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },

    addInputRules() {
        return [
            wrappingInputRule({
                find: inputRegex,
                type: this.type,
                getAttributes: match => ({
                    checked: match[match.length - 1] === 'x',
                }),
            }),
        ]
    },
})