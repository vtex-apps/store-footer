import { useEffect, useState } from 'react'
import { useRuntime, canUseDOM } from 'vtex.render-runtime'
import { useDevice } from 'vtex.device-detector'

/** If there is a fold on the page, returns false until the user
 * scrolls. This is a temporary hack, until partial hydration
 * or something similar becomes available from render-runtime
 */
const useFold = () => {
  const { extensions, page } = useRuntime()
  const { isMobile } = useDevice()
  const rootExtension = extensions[page]
  const { blocks } = rootExtension

  const hasFold = blocks?.some(({ extensionPointId }) =>
    extensionPointId === '__fold__' ||
    extensionPointId === `__fold__.${isMobile ? 'mobile' : 'desktop'}`
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
