import React, { Component } from 'react'
import style from './components/FooterLayout.css'

const FooterLayout: StorefrontFunctionComponent<FooterLayoutProps> = props => {
  return <div className={style.footerLayout}>{props.children}</div>
}

interface FooterLayoutProps {
  children: Component
}

FooterLayout.getSchema = () => {
  // tslint:disable: object-literal-sort-keys
  return {
    title: 'editor.footer.title',
    description: 'editor.footer.description',
    type: 'object',
  }
}

export default FooterLayout
