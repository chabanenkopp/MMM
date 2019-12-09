import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'Theme'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Flex, Box } from 'components/atoms/Layout'
import ImageLink from 'components/atoms/ImageLink'
import pdf from 'assets/images/pdf.svg'
import excel from 'assets/images/excel.svg'
import word from 'assets/images/word.svg'
import task from 'assets/images/link.svg'
import link from 'assets/images/task.svg'

const chooseIcon = (type) => {
  switch (type) {
    case 'pdf':
      return pdf
    case 'excel':
      return excel
    case 'word':
      return word
    case 'task':
      return task
    case 'link':
      return link
    default:
      return link
  }
}

const Link = styled.a`
  text-decoration: none;
  margin-left: ${space.m};
`

const Materials = ({ links }) => (
  <Box>
    {links.map(({ type, label, url }) => (
      <Flex key={label} alignItems="center" ml="m">
        <ImageLink img={chooseIcon(type)} height={pxToRem(30)} href={url} />
        <Link href={url}>
          <Text
            display="contents"
            color={COLORS.MAJOLICA_BLUE}
            fontSize={['xs', 's', 'm']}
            fontWeight="thin"
          >
            {label}
          </Text>
        </Link>
      </Flex>
    ))}
  </Box>
)

Materials.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Materials
