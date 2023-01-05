import axios from "axios"
import { TEST_ADMIN_BASE_API_URL, MAIN_ADMIN_BASE_API_URL } from "../../../apiGlobally"
// AddNewTags  ----------------------------------------------createCleanerTag---------------------------------------
export function createCleanerTag(localKeyCheck: string, payloads: any, refs: string, id: number, setloading: any) {
    console.log('refs', refs);
    // console.log('createCleanerTag request2 server', refs);
    // console.log('createCleanerTag request2 server ', payloads);
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/createCleanerTag`, { tagname: payloads.join(","), cleanerid: id, tagtype: refs }).then((res) => {
        // setloading(false)
        return res
    }).catch((err) => {
        // setloading(false)
        return err
    })
    return result
}