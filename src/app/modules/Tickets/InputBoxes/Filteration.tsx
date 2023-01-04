import React from 'react'
const Filteration = ({ SingleSelectInput, handleChangeInput, CleanerfilterData, CustomerfilterData, SelectedFilterTicketCateogryData }: any) => {
    return (
        <>
            {/* <div > */}
            <div className='d-flex align-items-center justify-content-center my-2'>
                {/* cleaner id  */}
                {CleanerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CleanerfilterData} reference={'Select Cleaner'} name={"cleanerid"}></SingleSelectInput>
                }
                {CustomerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CustomerfilterData} reference={'Select Customer'} name={"customerid"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Ticket Category'} name={"ticketidcategory"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Supervisor'} name={"supervisor"}></SingleSelectInput>
                }
            </div>
            {/* </div> */}
            {/* bottom filtreration ============================================================================ */}
            <div className='d-flex align-items-center justify-content-center my-2'>
                {/* cleaner id  */}
                {CleanerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CleanerfilterData} reference={'Select ID'} name={"cleanerid"}></SingleSelectInput>
                }
                {CustomerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CustomerfilterData} reference={'Select Customer'} name={"customerid"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Status'} name={"ticketidcategory"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Created AT'} name={"supervisor"}></SingleSelectInput>
                }
            </div>
            <div className='d-flex align-items-center justify-content-center my-2'>
                {/* cleaner id  */}
                {CleanerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CleanerfilterData} reference={'Select Updated At'} name={"cleanerid"}></SingleSelectInput>
                }
                {CustomerfilterData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CustomerfilterData} reference={'Select Source'} name={"customerid"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Cleaner'} name={"ticketidcategory"}></SingleSelectInput>
                }
                {SelectedFilterTicketCateogryData &&
                    <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Supervisor'} name={"supervisor"}></SingleSelectInput>
                }
            </div>
        </>
    )
}
export default Filteration