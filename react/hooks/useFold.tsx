import { useEffect, useState } from 'react'
import { useRuntime, canUseDOM } from 'vtex.render-runtime'

const useFold = () => {
  const { extensions, page } = useRuntime()
  const rootExtension = extensions[page]
  const { blocks } = rootExtension

  const hasFold = blocks?.some(({ extensionPointId }) =>
    extensionPointId.includes('__fold__')
  ) ?? false

  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!shouldRender) {
        setShouldRender(true)
      }
    }

    if (hasFold && !shouldRender && canUseDOM) {
      window.document.addEventListener('scroll', handleScroll)

      return () => {
        window.document.removeEventListener('scroll', handleScroll)
      }
    }

    return
  }, [hasFold, shouldRender])

  return !hasFold || shouldRender
}

export default useFold
