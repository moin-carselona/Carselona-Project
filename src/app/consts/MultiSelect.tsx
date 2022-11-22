import React from 'react'
import Select from 'react-select'

import {colourStyles2} from '../../Css'
const MultiSelect = ({setSelectedData, allDatafilter}: any) => {
  const [showData, setShowData] = React.useState<any>([])

  React.useEffect(() => {
    const updatedData = allDatafilter?.map((ele: any, i: number) => {
      if (ele.name) {
        const newData = {
          label: ele.name,
          value: ele.id,
        }
        return newData
      }

      if (ele.first_name) {
        const newData = {
          label: ele.first_name + ' ' + ele.last_name + '(' + ele.phone + ')',
          value: ele.id,
        }
        return newData
      }
    })
    setShowData(updatedData)
  }, [])
  const HandleSearch = (event: any) => {
    setSelectedData(event?.map((ele: any) => ele.value))
  }
  return (
    <div>
      <Select
        isClearable
        isSearchable
        isMulti
        options={showData}
        onChange={HandleSearch}
        defaultValue={showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default MultiSelect
