import { getNotification } from "../../auth/core/_requests"

export const GetCartNotificationData = async () => {
    const { data }: any = await getNotification()
    return data.TemplateData
}