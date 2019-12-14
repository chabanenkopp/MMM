import React, { Component } from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { radius, space } from 'Theme'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'

const { PASSWORD } = { PASSWORD: 'password' }

const initialState = {
  [PASSWORD]: '',
}

const Form = styled.form`
  margin-top: ${space.xl};
  border-radius: ${pxToRem(20)};
  box-shadow: 0 ${pxToRem(6)} ${pxToRem(28)} 0 rgba(24, 52, 117, 0.2);
`

class LoginForm extends Component {
  state = initialState
  handleSubmitForm = (e) => {
    e.preventDefault()
    const { password } = this.state
    if (password !== '') {
      console.log('success')
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <Box p={['10px', 'm', 'l']}>
          <Flex mt="l">
            <Input
              onChange={this.handleInputChange}
              isValid
              placeholder="Course password"
              type="password"
              value={this.state[PASSWORD]}
              name={PASSWORD}
              width="100%"
              p="m"
            />
          </Flex>
          <Flex flexDirection="column" mb="m">
            <Button.Filled
              type="submit"
              color={COLORS.PERCEPTIBLE_AT_A_GLANCE}
              gradientFromColor={COLORS.WHITE}
              gradientToColor={COLORS.WHITE}
              borderRadius={radius.xl}
              isShadow
              fontSize="m"
              height={pxToRem(60)}
              mt="l"
            >
              SUBMIT
            </Button.Filled>
          </Flex>
        </Box>
      </Form>
    )
  }
}

export default LoginForm
