export const initialState: any = {
    Title: "",
    subTitle: "",
    viewMediaPushID: "",
    createForm: "",

}
export const reducer = (initialState: any, { type, payload }: any) => {
// console.log('payload', payload);

    switch (type) {
        case "Selected_Template": return { ...initialState, Title: payload.titles, subTitle:payload.subTitles , viewMediaPushID:payload.viewMediaPushID}
        case "VIEW_CREATE_TEMPLATE_ID": return { ...initialState, ViewCreateID: payload }
        case "REFRENCE_CREATE_NOTIFICATION_TEMPLATE": return { ...initialState, createForm: payload }
        default: return initialState
    }
}