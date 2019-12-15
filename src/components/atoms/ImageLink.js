import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from 'Theme'
import { pxToRem } from 'helpers'
import ReactLink from './Link'

const LogoElement = styled.img`
  max-height: ${pxToRem(50)};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ height }) => height && `height: ${height}`};
  /* margin-bottom: ${theme.space.s}; */
  display: block;
`

const ImageLink = ({ img, href, to, maxHeight, height }) => {
  if (href)
    return (
      <a href={href}>
        <LogoElement
          src={img}
          alt="isse"
          maxHeight={maxHeight}
          height={height}
        />
      </a>
    )
  return (
    <ReactLink to={to}>
      <LogoElement src={img} alt="isse" maxHeight={maxHeight} height={height} />
    </ReactLink>
  )
}

ImageLink.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  maxHeight: PropTypes.string,
  height: PropTypes.string,
}

export default ImageLink
