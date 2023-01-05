import React from 'react';
import Select from 'react-select';
import { colourStyles2 } from '../../Css';
const MultiSelect = ({ setSelectedData, allDatafilter, reference2, name }: any) => {
  console.log('allDatafilter', allDatafilter);
  const [showData, setShowData] = React.useState<any>([])
  React.useEffect(() => {
    const updatedData = allDatafilter?.map((ele: any, i: number) => {
      if (ele.first_name) {
        const newData = {
          label: ele.first_name + ' ' + ele.last_name + '(' + ele.phone + ')',
          value: ele.id,
        }
        return newData
      }
      else if (ele.name) {
        const newData = {
          label: ele.name,
          value: ele.id,
        }
        return newData
      }
      else if (ele.subcategory_name) {
        const newData = {
          label: ele.subcategory_name,
          value: ele.id,
        }
        return newData
      }
    })
    setShowData(updatedData)
  }, [allDatafilter])
  const HandleSearch = (event: any) => {
    if (reference2 === "default") {
      setSelectedData(event?.map((ele: any) => ele.value), name)
    } else {
      setSelectedData(event?.map((ele: any) => ele.value))
    }
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
