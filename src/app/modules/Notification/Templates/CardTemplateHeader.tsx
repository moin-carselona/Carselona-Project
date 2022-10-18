import React from 'react'
import DialogBox from "../DialogBox/DialogBox"
type Props = {
    isDataAvailable?: string
    start?: string
    end?: string
    Header?: string
    length?: number
    onchangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const CardTemlateHeader: React.FC<Props> = ({  onchangeValue }) => {
    const [createTemplatesPop, setCreateTemplatesPopOpen] = React.useState<boolean>(false);
    const handleCreateTemplatesPop = () => {
        // setId(id);
        setCreateTemplatesPopOpen(!createTemplatesPop);
    }

    
    return (
        <>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                
                    <span className='card-label fw-bold fs-3 mb-1'>
                        <div className='mb-5 '>
                            <label className='form-label fw-bold'></label>
                            <div>
                                <select
                                    className='form-select form-select-solid'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    onChange={onchangeValue}
                                >
                                    <option value='en'>English</option>
                                    <option value='hi hn'>Hindi</option>
                                    <option value='kn'>Kanada</option>
                                </select>
                            </div>
                        </div>
                    </span>
                </h3>
                {/* <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to add a user'
                >
                    <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_invite_friends'
                        onClick={() => handleCreateTemplatesPop()}
                    >
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        {createTemplatesPop ? " Please Wait Creating..." : "Create Templates"}
                    </a>
                </div> */}
            </div>
            {/* end::Header */}
            {/* pop form */}
            {createTemplatesPop && <DialogBox handleCreateTemplatesPop={handleCreateTemplatesPop} />}
            {/* pop  form*/}
        </>
    )
}
export default CardTemlateHeader
