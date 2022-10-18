import React, { useState } from 'react'
import { KTSVG } from '../../../../_metronic/helpers'
import DialogBox from '../DialogBox/DialogBox'
import { CardCustomContext } from '../SendNotificationTemplate'
type Props = {
    subTitle: any
    notify: {
        id: number
        status: number
        isdeleted: number
        createdAt: number
        updatedAt: number
        title: {
            en: string
            hi: string
            hn: string
            kn: string
        }
        description: {
            en: string
            hi: string
            hn: string
            kn: string
        }
    }
}



const CardTemplateTbody: React.FC<Props> = ({ notify, subTitle }) => {
    const { id, title, description }: any = notify
    const Redux = React.useContext(CardCustomContext)
    const [toggle, setToggle] = useState<boolean>(false)
    const [ids, setIDS] = useState(1)
    const handleViewMedia = (id: number) => {
        setToggle(!toggle)
        setIDS(id)
    }
        ;

// hi, pritesh admin is removed from baseURL

    return (
        <tbody >
            <tr>
                <td>
                    <div className='symbol symbol-45px me-12'>
                        {subTitle === "hi hn" ? title[subTitle.split(" ")[0]] || title[subTitle.split(" ")[1]] : title[subTitle]}
                    </div>
                </td>
                <td>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        {subTitle === "hi hn" ? description[subTitle.split(" ")[0]] || description[subTitle.split(" ")[1]] : description[subTitle]}
                    </span>
                </td>
                <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2 mr-12'>
                            <p onClick={() => handleViewMedia(id)} >view </p>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                        {
                            subTitle && <>
                                <a
                                    href='#'
                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2'
                                >
                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                </a>
                                <a
                                    href='#'
                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                >
                                    <KTSVG
                                        path='/media/icons/duotune/general/gen027.svg'
                                        className='svg-icon-3'
                                    />
                                </a>
                            </>
                        }
                    </div>
                </td>
            </tr>
            {toggle && <DialogBox toggle={toggle} handleViewMedia={handleViewMedia} ids={ids} ></DialogBox>}
        </tbody>
    )
}
export default CardTemplateTbody
