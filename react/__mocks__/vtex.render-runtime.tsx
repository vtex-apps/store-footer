import React, { ElementType } from 'react'

const runtime = { account: 'account' }

export const withRuntimeContext = (Comp: ElementType) => (props: any) => (
  <Comp {...props} runtime={runtime} />
)
