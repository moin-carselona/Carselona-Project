import React from 'react'
import Select from 'react-select'
import { colourStyles2 } from '../../Css'
const SingleSelectSearchTimeSlot = ({ handleChangeInputData, HeaderTitle, SelectData, DynamicKey, id, name, defaultData }: any) => {
  const [showData, setShowData] = React.useState<any>("")
  React.useEffect(() => {
    const updatedData = SelectData?.map((ele: any, i: number) => {
      if (ele[DynamicKey]) {
        const newData = {
          label: ele[DynamicKey],
          value: ele[id],
        }
        return newData
      }
    })
    const newUpdatedData = updatedData?.filter((ele: any, i: number) => {
      if (ele?.label !== defaultData.label) {
        return ele
      }
    })
    setShowData(newUpdatedData)
  }, [SelectData])
  return (
    <div>
      <Select
        placeholder={HeaderTitle}
        isClearable
        isSearchable
        options={showData}
        onChange={(event) => handleChangeInputData(event, name)}
        defaultValue={defaultData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default SingleSelectSearchTimeSlot
