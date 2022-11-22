import React from 'react'
const SelectDropdownForms = () => {
  return (
    <>
      <select
        className='form-select form-select-solid me-2'
        data-kt-select2='true'
        data-placeholder='Select option'
        data-allow-clear='true'
        id='cleanerType'
      // onChange={handleChange}
      >
        <option> Select Issue Date</option>
        {[
          { id: 0, name: 'Fuel Allowance ' },
          { id: 1, name: 'No Fuel Allowance' },
        ].map((item: any) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          )
        })}
      </select>
      <select
        className='form-select form-select-solid me-2'
        data-kt-select2='true'
        data-placeholder='Select option'
        data-allow-clear='true'
        id='cleanerType'
      // onChange={handleChange}
      >
        <option> Select First Due Date</option>
        {[
          { id: 0, name: 'Cash' },
          { id: 1, name: 'Points' },
        ].map((item: any) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          )
        })}
      </select>
      
    </>
  )
}
export default SelectDropdownForms
