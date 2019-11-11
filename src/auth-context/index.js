import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
// import { PostToServer } from 'services/auth-service'

const { Provider, Consumer: AuthServiceConsumer } = createContext()

export { Provider, AuthServiceConsumer }

class AuthServiceProvider extends Component {
  state = {
    currentUser: false,
  }
  // post = new PostToServer()

  componentDidMount() {
    // const storage = window.localStorage
    // const user = storage.getItem('login')
    // this.setState({ currentUser: user })
    // this.setState({ currentUser: null })
    this.setState({ currentUser: null })
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
