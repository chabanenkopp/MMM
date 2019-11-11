import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, globalStyles } from 'Theme'
import { PATHS, COLORS } from 'constant'
import { Flex } from 'components/atoms/Layout'
import AuthServiceProvider, { AuthServiceConsumer } from 'auth-context'
import LoginPage from 'routes/LoginPage'
import Mais from 'routes/Mais'
import Moodle from 'routes/Moodle'
import Mail from 'routes/Mail'
import loading from 'assets/images/loading.svg'

const { MOODLE, MAIL, LOGIN, MAIS } = PATHS

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`
const AnimationWrapper = styled(Flex)`
  background-image: linear-gradient(
    ${COLORS.MYTHICAL_ORANGE},
    ${COLORS.MELLOW_MELON}
  );
`

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthServiceProvider>
      <AuthServiceConsumer>
        {({ currentUser }) => {
          if (currentUser === false)
            return (
              <React.Fragment>
                <GlobalStyles />
                <AnimationWrapper
                  justifyContent="center"
                  alignItems="center"
                  minHeight="100vh"
                  minWidth="100%"
                >
                  <img src={loading} alt="loading" />
                </AnimationWrapper>
              </React.Fragment>
            )
          return (
            <React.Fragment>
              <Helmet>
                <link
                  href="https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:500,600,700&display=swap"
                  rel="stylesheet"
                />
                {/* <link rel="icon" href={favicon} /> */}
              </Helmet>
              <GlobalStyles />
              {currentUser === null ? (
                <Switch>
                  <Route path={LOGIN} component={LoginPage} />
                </Switch>
              ) : (
                <Switch>
                  <Route
                    path={MAIS}
                    render={({ match }) => {
                      return <Mais path={match.path} />
                    }}
                  />
                  <Route
                    path={MOODLE}
                    render={({ match }) => {
                      return <Moodle path={match.path} />
                    }}
                  />
                  <Route
                    path={MAIL}
                    render={({ match }) => {
                      return <Mail path={match.path} />
                    }}
                  />
                  <Route component={LoginPage} />
                </Switch>
              )}
            </React.Fragment>
          )
        }}
      </AuthServiceConsumer>
    </AuthServiceProvider>
  </ThemeProvider>
)

export default App
