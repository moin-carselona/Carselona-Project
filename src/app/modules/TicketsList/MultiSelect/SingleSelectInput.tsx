import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css';
const SingleSelectInput = ({ handleChangeInput, RenderingData, reference, name }: any) => {
    const [ShowSelectedValue, setShowSelectedValue] = React.useState<any>("")
    React.useEffect(() => {
        if (reference === "Select Ticket Category") {
            const updateData = RenderingData && RenderingData?.filter((individual: any) => {
                if (individual?.category_name == null) return (individual.first_name = "Name Not Available", individual.last_name = "Name Not Available");
                return individual   
            })
            const renderData = updateData?.map((individual: any, i: number) => {
                if (individual?.category_name) {
                    const newData = {
                        label: individual?.category_name,
                        value: individual?.id
                    }
                    return newData
                }
            })
            setShowSelectedValue(renderData)
        }
        else {
            const updateData = RenderingData && RenderingData?.filter((individual: any) => {
                if (individual?.first_name == null) return (individual.first_name = individual.phone);
                return individual
            })
            const renderData = updateData?.map((individual: any, i: number) => {
                if (individual?.first_name) {
                    const newData = {
                        label: individual?.first_name,
                        value: individual?.id
                    }
                    return newData
                }
            })
            setShowSelectedValue(renderData)
        }
    }, [RenderingData])
   
    return (
        <div className='me-2 w-25'>
            <Select
                isClearable
                placeholder={reference}
                options={ShowSelectedValue}
                onChange={(event) => handleChangeInput(event, name)}
                defaultValue={ShowSelectedValue}
                styles={colourStyles2}
            />
        </div>
    )
}
export default SingleSelectInput
