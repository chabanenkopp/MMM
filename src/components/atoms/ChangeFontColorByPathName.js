import React from 'react'
import PropTypes from 'prop-types'
import { COLORS } from 'constant'

const ChangeFontColorByPathName = ({ children, pathName, targetPath }) => (
  <font color={pathName === targetPath ? COLORS.PERCEPTIBLE_AT_A_GLANCE : null}>
    {children}
  </font>
)

ChangeFontColorByPathName.propTypes = {
  children: PropTypes.string.isRequired,
  targetPath: PropTypes.string.isRequired,
  pathName: PropTypes.string,
}

export default ChangeFontColorByPathName
