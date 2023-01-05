import React from 'react';
import Select from 'react-select';
import { colourStyles2 } from '../../Css';
const MultiSelectSearchDetails = ({ handleChangeInputData, HeaderTitle, SelectData, DynamicKey, DynamicKey2, DynamicKey3, id, name }: any) => {
  const [showData, setShowData] = React.useState<any>([])
  React.useEffect(() => {
    const updatedData = SelectData?.map((ele: any, i: number) => {
      let number = ele[DynamicKey3] ? '(' + ele[DynamicKey3] + ')' : "(NA)"
      if (ele[DynamicKey]) {
        const newData = {
          label: ele[DynamicKey] + ' ' + ele[DynamicKey2] + number,
          value: ele[id],
        }
        return newData
      }
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
export default MultiSelectSearchDetails
