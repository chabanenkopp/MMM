import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withAuthService from 'hoc/withAuthService'
import { Box, Flex } from 'components/atoms/Layout'
import { radius } from 'Theme'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import { PostToServer } from 'services/auth-service'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'

const INPUT_WIDTH = [pxToRem(350), pxToRem(400)]

const { LOGIN, PASSWORD } = {
  LOGIN: 'login',
  PASSWORD: 'password',
}

const initialState = {
  [LOGIN]: '',
  [PASSWORD]: '',
}

class LoginForm extends Component {
  state = initialState
  post = new PostToServer()
  handleSubmitForm = (e) => {
    e.preventDefault()
    const { login, password } = this.state
    const { allowAccess, setLoading, destroySession } = this.props
    if (login !== '' && password !== '') {
      setLoading()
      this.post
        .checkUser({ login, password })
        .then((resp) => {
          if (resp.exists) {
            const storage = window.localStorage
            storage.setItem('login', login)
            storage.setItem('password', password)
            allowAccess()
          } else destroySession()
        })
        .catch((err) => console.log(err))
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <Box p={['10px', 'm', 'l']}>
          <Input
            onChange={this.handleInputChange}
            isValid
            placeholder="Login"
            value={this.state[LOGIN]}
            name={LOGIN}
            width={INPUT_WIDTH}
            p="m"
          />

          <Box mt="l">
            <Input
              onChange={this.handleInputChange}
              isValid
              placeholder="Password"
              type="password"
              value={this.state[PASSWORD]}
              name={PASSWORD}
              width={INPUT_WIDTH}
              p="m"
            />
          </Box>
          <Flex flexDirection="column">
            <Button.Filled
              type="submit"
              color={COLORS.MELLOW_MELON}
              gradientFromColor={COLORS.WHITE}
              gradientToColor={COLORS.WHITE}
              borderRadius={radius.xl}
              isShadow
              fontSize="m"
              height={pxToRem(60)}
              mt="l"
            >
              LOGIN
            </Button.Filled>
          </Flex>
        </Box>
      </form>
    )
  }
}

LoginForm.propTypes = {
  allowAccess: PropTypes.func,
  setLoading: PropTypes.func,
  destroySession: PropTypes.func,
}

export default withAuthService(LoginForm)
