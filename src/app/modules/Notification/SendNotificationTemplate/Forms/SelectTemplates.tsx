import React from 'react'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { CardCustomContext } from '../../SendNotificationTemplate';
const SelectTemplates = ({ className, image }: any) => {
    const Redux = React.useContext(CardCustomContext)
    
    return (
        <>
            <div
                className={`card bgi-no-repeat ${className} border border-primary `}
                style={{
                    backgroundPosition: 'right top',
                    backgroundSize: '30% auto',
                    backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/' + image)})`,
                }}
            >
                <div className='card-body'>
                    <a href='#' className='card-title fw-bold text-muted text-hover-primary fs-4'>
                        {Redux.state.Title}
                    </a>
                </div>
            </div>
        </>
    )
}
export default SelectTemplates
