import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['footerSpacer'] as const

/**
 * @deprecated Use a simple inline element instead
 */
function Spacer() {
  const { handles } = useCssHandles(CSS_HANDLES)

  return <div className={`${handles.footerSpacer} flex flex-grow-1`} />
}

export default Spacer
