import React from 'react'
import SingleSelectSearchCategory from '../../../consts/SingleSelectSearchCategory'
import SingleSelectSearchDetails from '../../../consts/SingleSelectSearchDetails'
const Filteration = ({ handleChangeInput, CleanerfilterData, CustomerfilterData, SelectedFilterTicketCateogryData, SupervisorsListData }: any) => {
    const cleanerListDatas = CleanerfilterData && CleanerfilterData?.filter((individual: any) => {
        if (individual?.first_name == null) return (individual.first_name = individual.phone, individual.last_name = individual.phone);
        return individual
    })
    return (
        <>
            {/* <div > */}
            <div className='d-flex align-items-center justify-content-center my-2'>
                {/* cleaner id  */}
                {CleanerfilterData &&
                    <SingleSelectSearchDetails
                        handleChangeInputData={handleChangeInput}
                        HeaderTitle="Select Cleaner"
                        SelectData={cleanerListDatas}
                        DynamicKey={"first_name"}
                        DynamicKey2={"last_name"}
                        DynamicKey3={"phone"}
                        id={"id"}
                        name="cleanerid"
                    ></SingleSelectSearchDetails>
                }
                {CustomerfilterData &&
                    // <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={CustomerfilterData} reference={'Select Customer'} name={"customerid"}></SingleSelectInput>
                    <SingleSelectSearchDetails
                        handleChangeInputData={handleChangeInput}
                        HeaderTitle="Select Customer"
                        SelectData={CustomerfilterData}
                        DynamicKey={"first_name"}
                        DynamicKey2={"last_name"}
                        DynamicKey3={"phone"}
                        id={"id"}
                        name="customerid"
                    ></SingleSelectSearchDetails>
                }
                {SelectedFilterTicketCateogryData &&
                    // <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SelectedFilterTicketCateogryData} reference={'Select Ticket Category'} name={"ticketidcategory"}></SingleSelectInput>
                    <SingleSelectSearchCategory
                        handleChangeInputData={handleChangeInput}
                        HeaderTitle="Select Ticket Category'"
                        SelectData={SelectedFilterTicketCateogryData}
                        DynamicKey={"category_name"}
                        id={"id"}
                        name="ticketidcategory"></SingleSelectSearchCategory>
                }
                {SupervisorsListData &&
                    // <SingleSelectInput handleChangeInput={handleChangeInput} RenderingData={SupervisorsListData} reference={'Select Supervisor'} name={"supervisor"}></SingleSelectInput>
                    <SingleSelectSearchDetails
                        handleChangeInputData={handleChangeInput}
                        HeaderTitle="Select Supervisor"
                        SelectData={SupervisorsListData}
                        DynamicKey={"first_name"}
                        DynamicKey2={"last_name"}
                        DynamicKey3={"phone"}
                        id={"id"}
                        name="supervisor"
                    ></SingleSelectSearchDetails>
                }
            </div>
        </>
    )
}
export default Filteration