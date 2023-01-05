import React from 'react';
import Select from 'react-select';
import { colourStyles2 } from '../../Css';
const MultiSelectSearchCategory = ({ handleChangeInputData, HeaderTitle, SelectData, DynamicKey, id , name}: any) => {
  const [showData, setShowData] = React.useState<any>([])
  React.useEffect(() => {
    const updatedData = SelectData?.map((ele: any, i: number) => {
      const newData = {
        label: ele[DynamicKey],
        value: ele[id],
      }
      return newData
    })
    setShowData(updatedData)
  }, [SelectData])
  const HandleSearch = (event: any) => {
    handleChangeInputData(event?.map((ele: any) => ele.value), name)

  }
  return (
    <div>
      <Select
        isClearable
        isSearchable
        isMulti
        placeholder={HeaderTitle}
        options={showData}
        onChange={HandleSearch}
        defaultValue={showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default MultiSelectSearchCategory
