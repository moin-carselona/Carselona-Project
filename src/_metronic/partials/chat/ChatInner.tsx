/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { toast } from 'react-toastify'

type Props = {
  isDrawer?: boolean
  ticketreplies?: any
  tickets?: any,
  userData?: any
}

const ChatInner: FC<Props> = (props, { isDrawer = false }) => {
  const { ticketreplies, tickets, userData } = props;
  // console.log("TICKETS", ticketreplies)
  const [message, setMessage] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false);
  const [statusOptions] = useState([
    { id: "3", label: "Closed" },
    { id: "4", label: "Feedback Received" },
    { id: "5", label: "Unanswered" },
    { id: "6", label: "Follow Up" },
  ])
  // const [chatUpdateFlag, toggleChatUpdateFlat] = useState<boolean>(false)
  // const [messages, setMessages] = useState<MessageModel[]>(bufferMessages)
  // const [userInfos] = useState<UserInfoModel[]>(defaultUserInfos)

  // const sendMessage = () => {
  //   const newMessage: MessageModel = {
  //     user: 2,
  //     type: 'out',
  //     text: message,
  //     time: 'Just now',
  //   }

  //   bufferMessages.push(newMessage)
  //   setMessages(bufferMessages)
  //   toggleChatUpdateFlat(!chatUpdateFlag)
  //   setMessage('')
  //   setTimeout(() => {
  //     bufferMessages.push(messageFromClient)
  //     setMessages(() => bufferMessages)
  //     toggleChatUpdateFlat((flag) => !flag)
  //   }, 1000)
  // }

  // const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.keyCode === 13 && e.shiftKey === false) {
  //     e.preventDefault()
  //     sendMessage()
  //   }
  // }

  const sendMessage = (e: React.MouseEvent) => {
    console.log("chat runned")
    // console.log("sda", userData.id)
    // console.log("sda", tickets)
    // const isPrivateMessage = e.currentTarget.id === 'private-message';
    // // ticketid: 4571
    // // answer: dd
    // // userid: 7
    // const formData = new FormData();
    // formData.append("ticketid", tickets.id)
    // formData.append("answer", message)
    // formData.append("userid", userData.id)
    // // isPrivateMessage ? formData.append("is", userData.id) : formData.delete()
    // setLoading(true)
    // axios.post('https://adminapi.carselonadaily.com/api/admin/replyonticketbyadmin', formData)
    //   .then(response => {
    //     setLoading(false)
    //     toast.success("Message sent")
    //     console.log("SUBCES")
    //   }).catch(error => {
    //     console.log(error);
    //     setLoading(false)
    //     toast.error("Something went wrong")
    //   })
  }

  return (
    <div
      className='card-body'
      id={isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body'}
    >
      <div
        className={clsx('scroll-y me-n5 pe-5', { 'h-300px h-lg-auto': !isDrawer })}
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
        {ticketreplies && ticketreplies.data?.map((message: any, index: number) => {
          const state = message.status == 1 ? 'info' : 'primary'
          const templateAttr = {}
          if (message.template) {
            Object.defineProperty(templateAttr, 'data-kt-element', {
              value: `template-${message.status}`,
            })
          }
          const contentClass = `${isDrawer ? '' : 'd-flex'} justify-content-${message.status == 1 ? 'start' : 'end'
            } mb-10`
          return (
            <div
              key={`message${index}`}
              className={clsx('d-flex', contentClass, 'mb-10', { 'd-none': message.template })}
              {...templateAttr}
            >
              <div
                className={clsx(
                  'd-flex flex-column align-items',
                  `align-items-${message.status == 1 ? 'start' : 'end'}`
                )}
              >
                <div className='d-flex align-items-center mb-2'>
                  {message.status === 1 ? (
                    <>
                      <div className='ms-3'>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                        >
                          {message.name}  
                        </a>
                        <span className='text-muted fs-7 mb-1'>{message.createdAt}<small>{message.status == 1 ? '' : '(private message)'}</small></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='me-3'>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                        >
                          {message.name}
                        </a>
                        <span className='text-muted fs-7 mb-1'>{message.createdAt} <small>{message.status == 1 ? '' : '(private message)'}</small></span>
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
                >{message.answers } </div>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className='card-footer pt-4'
        id={isDrawer ? 'kt_drawer_chat_messenger_footer' : 'kt_chat_messenger_footer'}
      >
        <textarea
          className='form-control form-control-flush mb-3'
          rows={1}
          data-kt-element='input'
          placeholder='Type a message'
          value={message}
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


        <div className='d-flex flex-stack mt-3'>
          <div className='d-flex align-items-center me-2'>
            <select
              className='form-select form-select-solid'>
              <option>Select Job</option>
              {ticketreplies && ticketreplies.ticket && ticketreplies.ticket.attendanceList?.map((option: any) => (
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
        </div>
      </div>
    </div>
  )
}

export { ChatInner }
