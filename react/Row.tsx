import React from 'react'
import classNames from 'classnames'
import { Container } from 'vtex.store-components'
import { generateBlockClass } from '@vtex/css-handles'
import style from './components/Row.css'

const Row: StorefrontFunctionComponent<RowProps> = ({
  blockClass,
  children,
  fullWidth,
  inverted,
}) => {
  const content = <div className="w-100 flex items-center">{children}</div>

  const classes = generateBlockClass(style.row, blockClass)

  return (
    <div
      className={classNames(
        classes,
        'w-100',
        inverted ? 'bg-base--inverted c-on-base--inverted' : 'bg-base c-on-base'
      )}>
      {fullWidth ? (
        content
      ) : (
        <Container className="w-100 flex">{content}</Container>
      )}
    </div>
  )
}

interface RowProps {
  fullWidth?: boolean
  inverted?: boolean
  blockClass?: string
}

Row.schema = {
  title: 'editor.row.title',
  type: 'object',
  properties: {
    blockClass: {
      title: 'editor.blockClass.title',
      description: 'editor.blockClass.description',
      type: 'string',
      isLayout: true,
    },
    inverted: {
      title: 'editor.inverted.title',
      description: 'editor.inverted.description',
      type: 'boolean',
      default: true,
      isLayout: true,
    },
    fullWidth: {
      title: 'editor.fullWidth.title',
      description: 'editor.fullWidth.description',
      type: 'boolean',
      default: false,
      isLayout: true,
    },
  },
}

export default Row
