import React from 'react'
import { AuthServiceConsumer } from 'contexts/auth-context'

const withAuthService = (Wrapped) => (props) => (
  <AuthServiceConsumer>
    {({ currentUser, ...rest }) => (
      <Wrapped {...props} currentUser={currentUser} {...rest} />
    )}
  </AuthServiceConsumer>
)

export default withAuthService
