import React from 'react'
import style from './SocialNetwork.css'
import withImage from './withImage'

/**
 * Shows an image for an specific social network
 */
const SocialNetwork: StorefrontFunctionComponent<SocialNetworkProps> = ({
  imageSrc,
  url,
}) => {
  if (!imageSrc) {
    return null
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={`${style.socialNetworkList} c-muted-1`}>
      <img className={`${style.socialNetworkItem} w2 h2`} src={imageSrc} />
    </a>
  )
}

SocialNetwork.displayName = 'SocialNetwork'

interface SocialNetworkProps extends SocialNetworkSchema {
  imageSrc: string
}

interface SocialNetworkSchema {
  url: string
  showInColor: boolean
  socialNetwork: SocialNetworkEnum
}

enum SocialNetworkEnum {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
  YouTube = 'YouTube',
}

SocialNetwork.getSchema = () => {
  // tslint:disable: object-literal-sort-keys
  return {
    title: 'editor.footer.socialNetworks',
    description: '',
    type: 'object',
    properties: {
      showInColor: {
        default: false,
        isLayout: true,
        title: 'editor.footer.showSocialNetworksInColor.title',
        type: 'boolean',
      },
      socialNetwork: {
        default: 'Facebook',
        enum: ['Facebook', 'Twitter', 'Instagram', 'YouTube'],
        title: 'editor.footer.socialNetworks.url.title',
        type: 'string',
      },
      url: {
        title: 'editor.footer.socialNetworks.url.title',
        type: 'string',
      },
    },
  }
}

const getImagePathFromProps = ({
  socialNetwork,
  showInColor,
}: SocialNetworkSchema) => `${socialNetwork}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(SocialNetwork)
