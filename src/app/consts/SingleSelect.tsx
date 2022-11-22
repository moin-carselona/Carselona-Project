import React from 'react'
import Select from 'react-select'

import {colourStyles2} from '../../Css'
const SingleSelect = ({setSelectedData, allDatafilter, refrence}: any) => {
  const [showData, setShowData] = React.useState([])

  React.useEffect(() => {
    const updatedData = allDatafilter?.map((ele: any, i: number) => {
      if (ele.first_name) {
        const newData = {
          label: ele.first_name + ' ' + ele.last_name + '(' + ele.phone + ')',
          value: ele.id,
        }
        return newData
      }

      if (ele.name) {
        const newData = {
          label: ele.name,
          value: ele.id,
        }
        return newData
      }
    })
    setShowData(updatedData)
  }, [allDatafilter])
  const HandleSearch = (event: any) => {
    console.log(event)
    if (event) {
      setSelectedData(event.value || 0)
    } else {
      setSelectedData(0)
    }
  }
  return (
    <div>
      <Select
        // defaultValue={showData[0]}
        placeholder={refrence}
        isClearable
        isSearchable
        options={showData}
        onChange={HandleSearch}
        defaultValue={showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default SingleSelect
