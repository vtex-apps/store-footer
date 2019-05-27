import React, { ElementType } from 'react'

const runtime = { account: 'account' }

// eslint-disable-next-line react/display-name
export const withRuntimeContext = (Comp: ElementType) => (props: any) => (
  <Comp {...props} runtime={runtime} />
)
