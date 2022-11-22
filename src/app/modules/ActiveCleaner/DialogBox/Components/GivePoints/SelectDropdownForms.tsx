import moment from 'moment'
import React from 'react'
const SelectDropdownForms = () => {
  return (
    <>
      <div className='d-flex align-items-start justify-content-start flex-column '>
        <label htmlFor="points" className="card-title fw-bolder text-dark font-weight-bold"  >Select Reward Type</label>
        <select
          className='form-select form-select-solid me-2'
          data-kt-select2='true'
          data-placeholder='Select option'
          data-allow-clear='true'
          id='cleanerType'
        // onChange={handleChange}
        >
          {[
            { id: 0, name: 'Cash ' },
            { id: 1, name: 'Points' },
          ].map((item: any) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <br />
      <div className='d-flex align-items-start justify-content-start flex-column '>
        <label htmlFor="points" className="card-title fw-bolder text-dark font-weight-bold"  >Points/Cash</label>
        <input
          type='text'
          placeholder='Points/Cash '
          // value={Search}
          // onChange={(e: any) => setSearch(e.target.value)}
          className='form-control form-control-solid'
        />
      </div>
      <br />

      <div className='d-flex align-items-start justify-content-start flex-column '>
        <label htmlFor="points" className="card-title fw-bolder text-dark font-weight-bold"  >Select Reason</label>
        <select
          className='form-select form-select-solid me-2'
          data-kt-select2='true'
          data-placeholder='Select option'
          data-allow-clear='true'
          id='cleanerType'
        // onChange={handleChange}
        >
          {[
            { id: 0, name: 'Not At Home ' },
            { id: 1, name: 'Launch Carselona Rewards ' },
            { id: 2, name: 'Job Missed ' },
            { id: 3, name: 'Adhoc compensation ' },
            { id: 4, name: 'Mass Demo' },
            { id: 5, name: 'Missed Interior Cleaning ' },
          ].map((item: any) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <br />

      <div className='d-flex align-items-start justify-content-start flex-column '>
        <label htmlFor="points" className="card-title fw-bolder text-dark font-weight-bold"  >Date</label>
        <input
          type='date'
          // placeholder='Points/Cash '
          // value={moment().format("YYYY-DD-MM")}
          defaultValue={moment().format("YYYY-DD-MM")}
          // onChange={(e: any) => setSearch(e.target.value)}
          className='form-control form-control-solid'
        />
      </div>
      <br />
    </>
  )
}
export default SelectDropdownForms
