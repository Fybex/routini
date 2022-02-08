import { Node, mergeAttributes, wrappingInputRule } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from './task-item-component'
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
                default: null,
            },
            priority: {
                default: 4,
            },
            delete: {
                default: null,
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

    defining: true,
    draggable: true,

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
                        // console.log(parent === newState.doc, !node.attrs.id, node.attrs.id, node.attrs.content, node.type.name)
                        if (
                            !node.attrs.id && node.type.name === 'taskItem'
                        ) {
                            console.log('descendants', node.attrs.delete)
                            tr.setNodeMarkup(pos, undefined, {
                                ...node.attrs,
                                id: uuid(),
                            })
                            console.log('Success ' + tr)
                        }
                    })

                    return tr
                },
            }),
        ]
    },

    addCommands() {
        return {
            setTaskItem: options => ({ commands }) => {
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
})
