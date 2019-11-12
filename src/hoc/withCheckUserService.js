import React from 'react'
import { CheckUserServiceConsumer } from 'check-user-service-context'

const withCheckUserService = (Wrapped) => (props) => (
  <CheckUserServiceConsumer>
    {(authService) => <Wrapped {...props} authService={authService} />}
  </CheckUserServiceConsumer>
)

export default withCheckUserService
