import React from 'react'
import Select from 'react-select'
import { colourStyles2 } from '../../Css'
const SingleSelectSearchCategory = ({ handleChangeInputData, HeaderTitle, SelectData, DynamicKey,id,  name }: any) => {
  const [showData, setShowData] = React.useState<any>("")
  React.useEffect(() => {
    const updatedData = SelectData?.map((ele: any, i: number) => {
      if(ele[DynamicKey]){
        const newData = {
          label: ele[DynamicKey]  ,
          value: ele[id],
        }
        return newData
      }
    })
    setShowData(updatedData)
  }, [SelectData])
  return (
    <div>
      <Select
        placeholder={HeaderTitle}
        isClearable
        isSearchable
        options={showData}
        onChange={(event) => handleChangeInputData(event, name)}
        defaultValue={showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default SingleSelectSearchCategory
