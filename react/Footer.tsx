import React from 'react'
import { ExtensionPoint, Unstable__ChildBlock } from 'vtex.render-runtime'
import LegacyFooter from './components/legacy/Footer'

const Footer: StorefrontFunctionComponent = props => {
  return (
    <Unstable__ChildBlock id="footer-layout">
      {(hasChild?: object) => {
        return hasChild ? (
          <ExtensionPoint id="footer-layout" />
        ) : (
          <LegacyFooter {...props} />
        )
      }}
    </Unstable__ChildBlock>
  )
}

export default Footer
