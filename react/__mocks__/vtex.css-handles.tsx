const useCssHandles = (input: string[]) => {
  return {
    handles: Object.keys(input),
    withModifier: (id: string, mod: any) => id,
  }
}

export { useCssHandles }
