import type { ElementType } from 'react'
import React from 'react'

const runtime = { account: 'account', platform: 'vtex' }

// eslint-disable-next-line react/display-name
export const withRuntimeContext = (Comp: ElementType) => (props: any) => (
  <Comp {...props} runtime={runtime} />
)

export const useRuntime = () => runtime
