import React, { FC } from 'react'
import { KTCardBody } from '../../../_metronic/helpers'
import TicketListMain from './TicketListMain'
const ControllerRouteTickets: FC = () => {
    return (
        <KTCardBody className='card py-4'>
            <TicketListMain></TicketListMain>
        </KTCardBody>
    )
}
export default ControllerRouteTickets
