import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'

export const OneLine = Extension.create({
    name: 'OneLine',

    addProseMirrorPlugins() {
        return [
            new Plugin({
                key: new PluginKey('OneLine'),
                props: {
                    handleKeyDown: (view, event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                            // do something
                            return true
                        }

                        return false
                    },
                },
            }),
        ]
    },
})