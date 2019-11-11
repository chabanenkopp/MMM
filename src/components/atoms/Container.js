import React from 'react'
import { Box } from 'components/atoms/Layout'

const commonProps = {
  width: '100%',
  mx: 'auto',
  px: 'm',
}

const Container = (props) => <Box {...props} {...commonProps} maxWidth={1200} />

const Narrow = (props) => <Box {...props} {...commonProps} maxWidth={700} />

Container.Narrow = Narrow

const FullWidth = (props) => <Box {...props} {...commonProps} />

Container.FullWidth = FullWidth

export default Container
