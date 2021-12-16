import { Node, mergeAttributes, wrappingInputRule } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from './editor-task-item-component'
import { Plugin } from 'prosemirror-state'
import uuid from 'react-uuid'

export const inputRegex = /^\s*(\[([ |x])\])\s$/

export default Node.create({
    name: 'taskItem',

    group: 'block',

    addAttributes() {
        return {
            checkbox: {
                default: false,
            },
            date: {
                default: new Date(),
            },
            content: {
                default: '',
            },
            delete: {
                default: false,
            },
            tasks: {
                default: this.options.tasks
            },
            id: {
                default: null,
                rendered: false,
                keepOnSplit: false,
            },

        }
    },

    addStorage() {
        return {
            object: {},
        }
    },

    content() {
        return 'paragraph+'
    },

    defining: true,

    parseHTML() {
        return [
            {
                tag: 'taskItem',
            },
        ]
    },

    renderHTML({ node, HTMLAttributes }) {
        return ['taskItem', mergeAttributes(HTMLAttributes), 0]
    },

    addKeyboardShortcuts() {
        const shortcuts = {
            Enter: () => this.editor.commands.splitListItem('taskItem'),
            'Shift-Tab': () => this.editor.commands.liftListItem('taskItem'),
        }

        if (!this.options.nested) {
            return shortcuts
        }

        return {
            ...shortcuts,
            Tab: () => this.editor.commands.sinkListItem('taskItem'),
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

    addProseMirrorPlugins() {
        return [
            new Plugin({
                appendTransaction: (_transactions, oldState, newState) => {
                    // no changes
                    if (newState.doc === oldState.doc) {
                        return
                    }
                    const tr = newState.tr

                    newState.doc.descendants((node, pos, parent) => {
                        if (
                            node.isBlock &&
                            parent === newState.doc &&
                            !node.attrs.id && node.attrs.content !== 0
                        ) {
                            tr.setNodeMarkup(pos, undefined, {
                                ...node.attrs,
                                id: uuid(),
                            })
                        }
                    })

                    return tr
                },
            }),
        ]
    },
})