import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'constant'
import { Flex } from 'components/atoms/Layout'
import loading from 'assets/images/loading.svg'

const AnimationWrapper = styled(Flex)`
  background-color: ${COLORS.DEUTUZIA_WHITE};
`
const Loading = () => (
  <AnimationWrapper
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    minWidth="100%"
  >
    <img src={loading} alt="loading" />
  </AnimationWrapper>
)

export default Loading
