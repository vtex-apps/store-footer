import type { PropsWithChildren } from 'react'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['footerLayout', 'footerLayoutSpacer'] as const

// eslint-disable-next-line @typescript-eslint/ban-types
function FooterLayout({ children }: PropsWithChildren<{}>) {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={`${handles.footerLayoutSpacer} flex flex-grow-1`} />
      <div className={handles.footerLayout}>{children}</div>
    </>
  )
}

export default FooterLayout
