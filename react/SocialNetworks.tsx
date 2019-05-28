import React from 'react'
import { IOMessage } from 'vtex.native-types'

import SocialNetwork from './components/SocialNetwork'
import style from './components/SocialNetworks.css'

interface SocialNetworkData {
  url: string
  name: string
}

interface Props {
  title?: string
  socialNetworks: SocialNetworkData[]
  showInColor: boolean
}

const SocialNetworks: React.FC<Props> = ({ title, socialNetworks }) => {
  return (
    <div>
      {title && (
        <div className={`${style.socialNetworksTitle} mb4`}>
          <IOMessage id={title} />
        </div>
      )}
      <div className={`${style.socialNetworksContainer} nh2 flex`}>
        {socialNetworks.map(socialNetworkData => (
          <SocialNetwork
            key={socialNetworkData.name + socialNetworkData.url}
            {...socialNetworkData}
          />
        ))}
      </div>
    </div>
  )
}

SocialNetworks.defaultProps = {
  socialNetworks: [],
  showInColor: false,
}
;(SocialNetworks as any).schema = {
  title: 'admin/editor.footer.socialNetworks.title',
  description: 'admin/editor.footer.socialNetworks.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'admin/editor.footer.showSocialNetworksInColor.title',
      type: 'boolean',
    },
  },
}

export default SocialNetworks
