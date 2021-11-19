import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import Checkbox from '@mui/material/Checkbox';

export default props => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    })
  }

  return (
    <NodeViewWrapper className="react-component">
      <Checkbox contentEditable={false} />
      <NodeViewContent className="content" />
    </NodeViewWrapper>
  )
}