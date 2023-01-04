import * as CSS from 'csstype'

export const PopCloseFormNotification: CSS.Properties = {textAlign: 'center'}
export const PopCloseFormNotificationPtag: CSS.Properties = {
  textAlign: 'center',
  width: '5%',
  marginLeft: '95%',
  fontWeight: '700',
  color: 'white',
  background: '#519ff7',
  border: '2px solid #519ff7',
  borderRadius: '50%',
  cursor: 'pointer',
}
export const HeaderCss: CSS.Properties = {marginLeft: '-280px'}
export const IdCss: CSS.Properties = {marginLeft: '-345px'}
export const ID_inputCss: CSS.Properties = {marginLeft: '-220px', width: '205px'}
export const Create_BtnCss: CSS.Properties = {width: '30%', marginLeft: '75%'}


export const Desc_InputCss: CSS.Properties = {width: '205px'}
export const ContainerCss: CSS.Properties = {width: '600px'}
// export const ContainerCssAss: CSS.Properties = {width: '100%'}
export const PushNotifyCssBTN: CSS.Properties = {width: '100%'}
export const PushNotifyCssBTNPush: CSS.Properties = {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
export const PushNotifyCssBTNChceckBoxParent: CSS.Properties = {
  width: '50%',
  display: 'flex',
  height: '20',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '10px',
}
export const PushNotifyCssBTNChceckBox: CSS.Properties = {marginTop: '-12px'}
export const Create_BtnCssView: CSS.Properties = {
  width: '100px',
  height: '30px',
  border: '0.2px solid #519ff7',
  color: 'white',
  background: '#519ff7',
}
export const colourStyles = {
  option: (styles: any, {data, isDisabled, isFocused, isSelected, width}: any) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#519ff7' : null,
      color: '#333333',
      width: '100%',
      tabindex:1
    }
  },
  control: (styles: any, {isFocused, isSelected}: any) => {
    return {
      ...styles,
      color: '#333333',
      width: '100%',
      border: '0.2px solid #519ff7',
      tabindex:1
      // boxShadow: isFocused ? "0px 0px 6px #ff8b67" : "none",
    }
  },
  input: (styles: any) => {
    return {
      ...styles,
      width: '200px',
      tabindex:1
    }
  },
}
export const colourStyles2 = {
  option: (styles: any, {data, isDisabled, isFocused, isSelected, width}: any) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#519ff7' : null,
      color: '#333333',
      width: '100%',
      tabindex: 1
    }
  },
  control: (styles: any, {isFocused, isSelected}: any) => {
    return {
      ...styles,
      color: '#333333',
      width: '100%',
      border: '0.2px solid whitesmoke',
      // boxShadow: isFocused ? "0px 0px 6px #ff8b67" : "none",
      tabindex:1
    }
  },
  input: (styles: any) => {
    return {
      ...styles,
      width: '200px',
      tabindex:1
    }
  },
}

