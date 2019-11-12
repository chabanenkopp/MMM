import React from 'react'
import { MaisTimetableServiceConsumer } from 'contexts/mais-timetable-service-context'

const withMaisTimetableService = (Wrapped) => (props) => {
  return (
    <MaisTimetableServiceConsumer>
      {(maisTimetableService) => (
        <Wrapped {...props} maisTimetableService={maisTimetableService} />
      )}
    </MaisTimetableServiceConsumer>
  )
}
export default withMaisTimetableService
