import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer: AuthServiceConsumer } = createContext()

export { Provider, AuthServiceConsumer }

class AuthServiceProvider extends Component {
  state = {
    currentUser: false,
  }

  componentDidMount() {
    this.setState({ currentUser: null })
    // this.setState({ currentUser: true })
  }

  render() {
    const { children } = this.props
    const { currentUser } = this.state
    return (
      <Provider
        value={{
          currentUser,
          destroySession: () =>
            this.setState({
              currentUser: null,
            }),
          allowAccess: () =>
            this.setState({
              currentUser: true,
            }),
          setLoading: () =>
            this.setState({
              currentUser: false,
            }),
        }}
      >
        {children}
      </Provider>
    )
  }
}

AuthServiceProvider.propTypes = {
  children: PropTypes.any,
}

export default AuthServiceProvider
