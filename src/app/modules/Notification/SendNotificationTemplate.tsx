import React from 'react'
import { initialState, reducer } from './Redux/Reducer'
import GetCardNotification from './SendNotificationTemplate/Components/GetCardNotification'
import { GetCartNotificationData } from './utils/functions'
export const CardCustomContext = React.createContext<any>(undefined)


const SendNotificationTemplate= () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const [getCardData, setGetCardData] = React.useState([])
    React.useEffect(() => {
        async function invoked() {
            const cardData = await GetCartNotificationData()
            setGetCardData(cardData)
        }
        invoked()
    }, [])


    return (
        <>
            <CardCustomContext.Provider value={{ state: state, dispatch: dispatch }}>
                <div className='row g-5 g-xl-8'>
                    {
                        getCardData?.map((card: any) => <div className='col-xl-4'>
                            <GetCardNotification
                                className='card-xl-stretch mb-xl-8'
                                image='abstract-4.svg'
                                title={card?.title}
                                time='3:30PM - 4:20PM'
                                description={card?.description}
                                id={card?.id}
                            />
                        </div>)
                    }
                </div>
            </CardCustomContext.Provider>
        </>
    )
}
export default SendNotificationTemplate
