import React from 'react'
import style from './components/FooterLayout.css'

const FooterLayout: React.FC = props => {
  return <div className={style.footerLayout}>{props.children}</div>
}

export default FooterLayout
