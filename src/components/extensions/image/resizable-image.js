import { Extension } from "@tiptap/core"
import { Schema } from "prosemirror-model"
import {
  defaultSettings,
  updateImageNode,
  imagePlugin,
} from "prosemirror-image-plugin"
import "prosemirror-image-plugin/dist/styles/common.css"
import "prosemirror-image-plugin/dist/styles/withResize.css"
import "prosemirror-image-plugin/dist/styles/sideResize.css"

const ImageTools = Extension.create({
  name: "ImageTools",

  defaultOptions: {
    ...defaultSettings,
    hasTitle: false,
    createOverlay: () => null,
  },

  onBeforeCreate() {
    this.editor.schema = new Schema({
      nodes: updateImageNode(this.editor.schema.spec.nodes, this.options),
      marks: this.editor.schema.spec.marks,
    })

    console.log(this.editor.schema)
  },

  addProseMirrorPlugins() {
    return [imagePlugin(this.editor.schema, this.options)];
  },
});

export default ImageTools;