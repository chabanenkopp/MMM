import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS, PATHS } from 'constant'
import { Flex } from 'components/atoms/Layout'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'
import LoginForm from './LoginForm'

const { MAIS } = PATHS

const GradientWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
  /* background-image: linear-gradient(
    ${COLORS.MYTHICAL_ORANGE},
    ${COLORS.MELLOW_MELON}
  ); */
`

const LoginFormContainer = styled(Flex)`
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
class LoginPage extends Component {
  componentDidMount() {
    const { currentUser, history } = this.props
    if (currentUser) history.push(MAIS)
  }

  render() {
    return (
      <GradientWrapper>
        <LoginFormContainer>
          <LoginForm />
        </LoginFormContainer>
      </GradientWrapper>
    )
  }
}

LoginPage.propTypes = {
  currentUser: PropTypes.object,
  history: PropTypes.object,
}

export default compose(withRouter, withAuthService)(LoginPage)
