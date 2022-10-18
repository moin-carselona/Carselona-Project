const CleanerTableBodyComponent = (props: any) => {
  const {timeSlots, cleanerStats, handleJobDetailSubmit,handleCleanerDetailsSubmit} = props
  // console.log('cleanerStats', cleanerStats);

  const obj = {
    timeslot_name: '',
    date_changed_from: '',
    subscriptiondetails: {name: ''},
    customer_data: {society_details: {name: '\n'}},
  }
  const servicetype1ClassName =
    'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center'
  const servicetype2ClassName =
    'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center'
  const noJobClassName =
    'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center'

  return cleanerStats?.map((cleanerStat: any) => (
    <tbody>
      {timeSlots?.map((timeslot: any) => {
        return (
          <tr>
            <td
              style={{maxWidth: '230px', width: '130px', cursor: 'pointer'}}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-html="true"
              // title={`<span>Phone</span><span>${cleanerStat.cleaner_details.phone}</span>`}
              title="And here's some amazing <span class='label label-inline font-weight-bold label-light-primary'>HTML</span> content. It's very <code>engaging</code>. Right?"
            >
              {/* <div className='d-flex'> */}
              {/* <div className='symbol-label'>
                  <img
                    src={cleanerStat.cleaner_details.profile_image}
                    alt='Emma Smith'
                    className='w-100'
                  />
                </div> */}
              <div
                className='bg-secondary p-2 text-center rounded text-black-50'
                style={{whiteSpace: 'pre-wrap'}
              }
              onClick={()=>handleCleanerDetailsSubmit(cleanerStat?.cleaner_details?.id)}
              >
                {cleanerStat.cleaner_details.first_name} {cleanerStat.cleaner_details.last_name}
              </div>
              {/* </div> */}
            </td>
            <td style={{maxWidth: '230px', width: '130px'}}>
              <div
                className='bg-secondary p-2 text-center rounded text-black-50'
                style={{whiteSpace: 'nowrap'}}
              >
                {timeslot.name}
              </div>
            </td>
            {cleanerStat?.attendence_data.map((attendance: any) => (
              <>
                <td>
                  <div
                    className='p-3 d-flex flex-column'
                    style={{maxWidth: '230px', width: '140px'}}
                  >
                    {attendance.timeslot_data?.length > 0 && (
                      <>
                        {attendance.timeslot_data?.length >= 4 &&
                          attendance.timeslot_data?.map((timeslot: any) => {
                            return (
                              <>
                                {timeslot.servicetype === 1 ? (
                                  <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                      handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                  >
                                    {timeslot.customer_data.society_details.name || 'Individual'}
                                    {timeslot.subscriptiondetails.frequencyid === 1
                                      ? ' (A)'
                                      : timeslot.subscriptiondetails.frequencyid === 2
                                      ? ' (W)'
                                      : timeslot.subscriptiondetails.frequencyid === 3
                                      ? ' (D)'
                                      : ' '}
                                  </div>
                                ) : (
                                  <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                      handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                  >
                                    {timeslot.customer_data.society_details.name || 'Individual'}
                                    {timeslot.subscriptiondetails.frequencyid === 1
                                      ? ' (A)'
                                      : timeslot.subscriptiondetails.frequencyid === 2
                                      ? ' (W)'
                                      : timeslot.subscriptiondetails.frequencyid === 3
                                      ? ' (D)'
                                      : ' '}
                                  </div>
                                )}
                              </>
                            )
                          })}
                        {attendance.timeslot_data?.length === 3 && (
                          <>
                            {attendance.timeslot_data?.map((timeslot: any) => {
                              return (
                                <>
                                  {timeslot.servicetype === 1 ? (
                                    <div
                                      className={servicetype1ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  ) : (
                                    <div
                                      className={servicetype2ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  )}
                                </>
                              )
                            })}
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                          </>
                        )}
                        {attendance.timeslot_data?.length === 2 && (
                          <>
                            {attendance.timeslot_data?.map((timeslot: any) => {
                              return (
                                <>
                                  {timeslot.servicetype === 1 ? (
                                    <div
                                      className={servicetype1ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  ) : (
                                    <div
                                      className={servicetype2ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  )}
                                </>
                              )
                            })}
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                          </>
                        )}
                        {attendance.timeslot_data?.length === 1 && (
                          <>
                            {attendance.timeslot_data?.map((timeslot: any) => {
                              return (
                                <>
                                  {timeslot.servicetype === 1 ? (
                                    <div
                                      className={servicetype1ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  ) : (
                                    <div
                                      className={servicetype2ClassName}
                                      onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                      }
                                      style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}}
                                    >
                                      {timeslot.customer_data.society_details.name || 'Individual'}
                                      {timeslot.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot.subscriptiondetails.frequencyid === 2
                                        ? ' (W)'
                                        : timeslot.subscriptiondetails.frequencyid === 3
                                        ? ' (D)'
                                        : ' '}
                                    </div>
                                  )}
                                </>
                              )
                            })}
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                            {
                              <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                                No Job
                              </div>
                            }
                          </>
                        )}
                      </>
                    )}
                    {attendance.timeslot_data?.length <= 0 && (
                      <>
                        {
                          <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                            No Job
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                            No Job
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                            No Job
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{cursor: ' not-allowed'}}>
                            No Job
                          </div>
                        }
                      </>
                    )}
                  </div>
                </td>
              </>
            ))}
          </tr>
        )
      })}
    </tbody>
  ))
}

export default CleanerTableBodyComponent
