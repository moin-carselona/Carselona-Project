const CleanerAvailabilityTable = (props: any) => {
  const {timeSlots, cleanerStats, handleJobDetailSubmit} = props
  const obj = {
    timeslot_name: '',
    date_changed_from: '',
    subscriptiondetails: {name: ''},
    customer_data: {society_details: {name: '\n'}},
  }
  return cleanerStats?.map((cleanerStat: any) => (
    <tbody>
      <tr>
        <td>
          <div className='bg-secondary p-2 text-center rounded text-black-50'>
            {cleanerStat.cleaner_details.first_name} {cleanerStat.cleaner_details.last_name}
          </div>
        </td>
        {/* <td>
            <div className='bg-secondary p-2 text-center rounded text-black-50'>
              {111} {222}
            </div>
          </td> */}

        {/* {timeSlots?.map((item: any) => {
            <td>
              <div className='bg-secondary p-2 text-center rounded text-black-50'>
                {item?.name}
              </div>
            </td>
          })} */}
        {cleanerStat?.attendence_data.map((attendance: any) => (
          <>
            <td>
              <div className='p-3' style={{width: '230px'}}>
                {attendance.timeslot_data?.length === 0
                  ? attendance.timeslot_data?.concat(obj, obj, obj, obj).map((timeslot: any) => (
                      <>
                        <div
                          className={`border  border-dark text-center py-2 my-1 rounded${
                            timeslot.servicetype === 2
                              ? timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : 'bg-light-danger'
                              : timeslot.date_changed_from !== ''
                              ? 'bg-light-success'
                              : ''
                          }`}
                        >
                          {timeslot.timeslot_name || `No Job`} <br />{' '}
                          {timeslot.customer_data.society_details
                            ? timeslot.customer_data.society_details.name
                            : 'Individual'}
                          {timeslot.subscriptiondetails.frequencyid === 1
                            ? ' (A)'
                            : timeslot.subscriptiondetails.frequencyid === 2
                            ? ' (W)'
                            : timeslot.subscriptiondetails.frequencyid === 3
                            ? ' (D)'
                            : ' '}{' '}
                        </div>
                      </>
                    ))
                  : ''}
                {attendance.timeslot_data?.length === 1
                  ? attendance.timeslot_data.filter((timeslot: any) => timeslot.servicetype === 2)
                      .length
                    ? attendance.timeslot_data?.concat(obj, obj)?.map((timeslot: any) => (
                        <>
                          <div
                            className={`border  border-dark text-center py-2 my-1 rounded ${
                              timeslot.servicetype === 2
                                ? timeslot.date_changed_from !== ''
                                  ? 'bg-light-success'
                                  : 'bg-light-danger'
                                : timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : ''
                            }`}
                          >
                            {timeslot.timeslot_name || `No Job`} <br />{' '}
                            {timeslot.customer_data.society_details
                              ? timeslot.customer_data.society_details.name
                              : 'Individual'}
                            {timeslot.subscriptiondetails.frequencyid === 1
                              ? ' (A)'
                              : timeslot.subscriptiondetails.frequencyid === 2
                              ? ' (W)'
                              : timeslot.subscriptiondetails.frequencyid === 3
                              ? ' (D)'
                              : ' '}{' '}
                          </div>
                        </>
                      ))
                    : attendance.timeslot_data?.concat(obj, obj, obj)?.map((timeslot: any) => (
                        <>
                          <div
                            className={`border  border-dark text-center py-2 my-1 rounded ${
                              timeslot.servicetype === 2
                                ? timeslot.date_changed_from !== ''
                                  ? 'bg-light-success'
                                  : 'bg-light-danger'
                                : timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : ''
                            }`}
                          >
                            {timeslot.timeslot_name || `No Job`} <br />{' '}
                            {timeslot.customer_data.society_details
                              ? timeslot.customer_data.society_details.name
                              : 'Individual'}
                            {timeslot.subscriptiondetails.frequencyid === 1
                              ? ' (A)'
                              : timeslot.subscriptiondetails.frequencyid === 2
                              ? ' (W)'
                              : timeslot.subscriptiondetails.frequencyid === 3
                              ? ' (D)'
                              : ' '}{' '}
                          </div>
                        </>
                      ))
                  : ''}
                {attendance.timeslot_data?.length === 2
                  ? attendance.timeslot_data?.concat(obj, obj)?.map((timeslot: any) => (
                      <>
                        <div
                          className={`border  border-dark text-center py-2 my-1 rounded ${
                            timeslot.servicetype === 2
                              ? timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : 'bg-light-danger'
                              : timeslot.date_changed_from !== ''
                              ? 'bg-light-success'
                              : ''
                          }`}
                        >
                          {timeslot.timeslot_name || `No Job`} <br />{' '}
                          {timeslot.customer_data.society_details
                            ? timeslot.customer_data.society_details.name
                            : 'Individual'}
                          {timeslot.subscriptiondetails.frequencyid === 1
                            ? ' (A)'
                            : timeslot.subscriptiondetails.frequencyid === 2
                            ? ' (W)'
                            : timeslot.subscriptiondetails.frequencyid === 3
                            ? ' (D)'
                            : ' '}{' '}
                        </div>
                      </>
                    ))
                  : ''}
                {attendance.timeslot_data?.length === 3
                  ? attendance.timeslot_data?.concat(obj)?.map((timeslot: any) => (
                      <>
                        <div
                          className={`border  border-dark text-center py-2 my-1 rounded ${
                            timeslot.servicetype === 2
                              ? timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : 'bg-light-danger'
                              : timeslot.date_changed_from !== ''
                              ? 'bg-light-success'
                              : ''
                          }`}
                        >
                          {timeslot.timeslot_name || `No Job`} <br />{' '}
                          {timeslot.customer_data.society_details
                            ? timeslot.customer_data.society_details.name
                            : 'Individual'}
                          {timeslot.subscriptiondetails.frequencyid === 1
                            ? ' (A)'
                            : timeslot.subscriptiondetails.frequencyid === 2
                            ? ' (W)'
                            : timeslot.subscriptiondetails.frequencyid === 3
                            ? ' (D)'
                            : ' '}{' '}
                        </div>
                      </>
                    ))
                  : ''}
                {attendance.timeslot_data?.length === 4
                  ? attendance.timeslot_data?.concat()?.map((timeslot: any) => (
                      <>
                        <div
                          className={`border  border-dark text-center py-2 my-1 rounded ${
                            timeslot.servicetype === 2
                              ? timeslot.date_changed_from !== ''
                                ? 'bg-light-success'
                                : 'bg-light-danger'
                              : timeslot.date_changed_from !== ''
                              ? 'bg-light-success'
                              : ''
                          }`}
                        >
                          {timeslot.timeslot_name || `No Job`} <br />{' '}
                          {timeslot.customer_data.society_details
                            ? timeslot.customer_data.society_details.name
                            : 'Individual'}
                          {timeslot.subscriptiondetails.frequencyid === 1
                            ? ' (A)'
                            : timeslot.subscriptiondetails.frequencyid === 2
                            ? ' (W)'
                            : timeslot.subscriptiondetails.frequencyid === 3
                            ? ' (D)'
                            : ' '}{' '}
                        </div>
                      </>
                    ))
                  : ''}
              </div>
            </td>
          </>
        ))}
      </tr>
    </tbody>
  ))
}

export default CleanerAvailabilityTable
