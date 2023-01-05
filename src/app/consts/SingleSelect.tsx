import React from 'react'
import Select from 'react-select'
import { colourStyles2 } from '../../Css'
const SingleSelect = ({ handleChangeInputData, name, allDatafilter, HeaderTitle, reference2 }: any) => {
  
  const [showData, setShowData] = React.useState<any>("")
  React.useEffect(() => {
    const updatedData = allDatafilter?.map((ele: any, i: number) => {
      if (ele.first_name) {
        const newData = {
          label: ele.first_name + ' ' + ele.last_name + '(' + ele.phone + ')',
          value: ele.id,
        }
        return newData
      }
      else if (ele.attendencedate) {
        let ans = ele.servicetype == 1 ? "Alternate Days" : ele.servicetype == 2 ? "Full Cleaninig Day" : "NO Decided"
        const newData = {
          label: ele.attendencedate + ' | ' + ele.job_detail.name + ' | ' + ans,
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
      else if (ele.category_name) {
        const newData = {
          label: ele.category_name,
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
    if (reference2 === "timeslotids") {
      const newUpdatedData = updatedData?.filter((ele: any, i: number) => {
        if (ele?.label !== "06AM-07AM") {
          return ele
        }
      })
      // console.log('newUpdatedData', newUpdatedData);
      // console.log('updatedData', updatedData);
      setShowData(newUpdatedData)
    }
    else {
      setShowData(updatedData)
    }
  }, [allDatafilter])
  return (
    <div>
      <Select
        // defaultValue={showData[0]}
        placeholder={HeaderTitle}
        isClearable
        isSearchable
        options={showData}
        onChange={(event) => handleChangeInputData(event, name)}
        defaultValue={reference2 !== null ? [{
          label: "06AM-07AM",
          value: "2",
        }] : showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default SingleSelect
