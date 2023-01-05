/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef, useState } from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import React from "react"
import { GetChatGeneralApiReplies, PostPrivateChatAPI, PostPublicChatAPI } from './API'
type Props = {
    isDrawer?: boolean
    ticketreplies?: any
    tickets?: any,
    userData?: any
}
// 4566
const ChatBox: FC<Props> = (props, { isDrawer = false }) => {
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const ticketData = useSelector((store: any) => store.ChatReducers.TicketData)
    const refss: any = useRef(null)
    console.log('refss', refss);
    const [ticketreplies, setTicketReplies] = useState<any>([])
    const [messages, setMessage] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isloading2, setloading2] = useState<boolean>(false);
    const [localUserid, setlocalUserid] = useState<any>(JSON.parse(localStorage.getItem("user") || ""));
    const [statusOptions] = useState([
        { id: "3", label: "Closed" },
        { id: "4", label: "Feedback Received" },
        { id: "5", label: "Unanswered" },
        { id: "6", label: "Follow Up" },
    ])
   
    const scrollBottomAuto = () => {
        refss.current?.scrollIntoView({ behavior: 'smooth' })
    }
    async function TicketReplies() {
        setloading2(true)
        const response = await GetChatGeneralApiReplies({ "ticketid": ticketData?.id }, localKeyCheck, setloading2)
        setTicketReplies(response.data)
    }
    React.useEffect(() => {
        ticketData?.id && TicketReplies()
    }, [ticketData?.id, isLoading])
    React.useEffect(() => {
        scrollBottomAuto()
    }, [messages, ticketreplies])
    const sendMessage = async (e: React.MouseEvent) => {
        const isPrivateMessage = e.currentTarget.id === 'private-message';
        console.log('isPrivateMessage', isPrivateMessage);
        isPrivateMessage ? await PostPrivateChatAPI({ "ticketid": ticketData?.id, "userid": localUserid, "answer": messages }, localKeyCheck) : await PostPublicChatAPI({ "ticketid": ticketData?.id, "userid": localUserid, "answer": messages }, localKeyCheck)
        !isPrivateMessage && GetChatGeneralApiReplies({ "ticketid": ticketData?.id }, localKeyCheck, setloading2)
        setMessage('')
        setLoading(!isLoading)
    }
    return (
        <>
            {
                isloading2 ? <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                    <div className='spinner-border mr-15' role='status'></div>
                    <h4 className='fw-bold'>Loading...</h4>
                </div> :
                    <div
                        className='card-body'
                        id={isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body'}
                    >
                        <div
                            style={{ maxHeight: !isloading2 ? "400px" : "" }}
                            // className={clsx('scroll-y me-n5 pe-5', { ' h-600px ': !isDrawer })}
                            className={clsx('scroll-y me-n5 pe-5  max', { 'h-lg-auto': !isDrawer })}
                            data-kt-element='messages'
                            data-kt-scroll='true'
                            data-kt-scroll-activate='{default: false, lg: true}'
                            data-kt-scroll-max-height='auto'
                            data-kt-scroll-dependencies={
                                isDrawer
                                    ? '#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer'
                                    : '#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer'
                            }
                            data-kt-scroll-wrappers={
                                isDrawer ? '#kt_drawer_chat_messenger_body' : '#kt_content, #kt_chat_messenger_body'
                            }
                            data-kt-scroll-offset={isDrawer ? '0px' : '-2px'}
                        >
                            {ticketreplies ? ticketreplies.data?.map((message: any, index: number) => {
                                const state = message.userid == 0 ? 'info' : 'primary'
                                const templateAttr = {}
                                if (message.template) {
                                    Object.defineProperty(templateAttr, 'data-kt-element', {
                                        value: `template-${message.userid}`,
                                    })
                                }
                                const contentClass = `${isDrawer ? '' : 'd-flex'} justify-content-${message.userid == 0 ? 'start' : 'end'
                                    } mb-10`
                                return (
                                    <div
                                        ref={refss}
                                        key={`message${index}`}
                                        className={clsx('d-flex', contentClass, 'mb-10', { 'd-none': message.template })}
                                        {...templateAttr}
                                    >
                                        <div
                                            className={clsx(
                                                'd-flex flex-column align-items',
                                                `align-items-${message.userid == 0 ? 'start' : 'end'}`
                                            )}
                                        >
                                            <div className='d-flex align-items-center mb-2'>
                                                {message.userid === 0 ? (
                                                    <>
                                                        <div className='ms-3'>
                                                            <span className='text-muted fs-7 mb-1'>{message.createdAt}<small>{message.status == 1 ? '' : '(private message)'}</small></span>
                                                            <a
                                                                href='#'
                                                                className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                                                            >
                                                                {message.name}
                                                            </a>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className='me-3'>
                                                            <span className='text-muted fs-7 mb-1'>{message.createdAt} <small>{message.status == 1 ? '' : '(private message)'}</small></span>
                                                            <a
                                                                href='#'
                                                                className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                                                            >
                                                                {message.name}
                                                            </a>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div
                                                className={clsx(
                                                    'p-5 rounded',
                                                    `bg-light-${state}`,
                                                    'text-dark fw-bold mw-lg-400px',
                                                    `text-end`
                                                )}
                                                data-kt-element='message-text'
                                            >{message.answers} </div>
                                        </div>
                                    </div>
                                )
                            })
                                : <> </>
                            }
                        </div>
                        <div
                            className='card-footer p-4'
                            id={isDrawer ? 'kt_drawer_chat_messenger_footer' : 'kt_chat_messenger_footer'}
                        >
                            <textarea
                                className='form-control form-control-flush mb-3'
                                rows={1}
                                data-kt-element='input'
                                placeholder='Type a message'
                                value={messages}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className='d-flex flex-stack'>
                                <button
                                    className='btn btn-primary'
                                    type='button'
                                    data-kt-element='send'
                                    onClick={sendMessage}
                                >
                                    Send
                                </button>
                                <button
                                    className='btn btn-primary'
                                    type='button'
                                    data-kt-element='send'
                                    id='private-message'
                                    onClick={sendMessage}
                                >
                                    Add Private Message
                                </button>
                            </div>
                            {/* <div className='d-flex flex-stack mt-3'>
                    <div className='d-flex align-items-center me-2'>
                        <select
                            className='form-select form-select-solid'>
                            <option>Select Job</option>
                            {ticketreplies && ticketreplies?.ticket && ticketreplies?.ticket?.attendanceList?.map((option: any) => (
                                <option id={option.id}>{option && option.job_detail && option.job_detail.name} {option.attendance}</option>
                            ))}
                        </select>
                        <select
                            className='form-select form-select-solid'>
                            <option>Change Status</option>
                            {statusOptions.map((option: any) => (
                                <option id={option.id}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        className='btn btn-primary'
                        type='button'
                        data-kt-element='send'
                    >
                        Update
                    </button>
                </div> */}
                        </div>
                    </div>
            }
        </>
    )
}
export { ChatBox }
