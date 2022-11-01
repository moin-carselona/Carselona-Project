import axios from "axios";
export const BaseURL_Rating = "https://adminapi.carselonadaily.com/api"
// get data for first time rendering intial 10 data
export function AllRatingAPI() {
    return axios.get(`${BaseURL_Rating}/admin/getallratings?start=${0}&length=${10}&orders=${"ASC"}&columns=${"customerid"}`)
}
// get data for pagination
export function AllRatingPagination(starts: number, lengths: number, order: string, columns: string) {
    return axios.get(`${BaseURL_Rating}/admin/getallratings?start=${starts}&length=${lengths}&orders=${order}&columns=${columns}`)
}
// get data for searching
export function SearchRatingAPI(SearchRating: any) {
    // console.log('SearchRating api se', SearchRating);
    return axios.get(`${BaseURL_Rating}/admin/getallratings?search=${SearchRating}&start=${0}&length=${10}&columns=customerid&orders=ASC`)
    // return axios.get(`https://adminapi.carselonadaily.com/api/admin/getallratings?search=sunil&start=0&length=10&columns=customerid&orders=ASC`)
}
// filter by cleaner id to get cleaner data
export function filterbyCleanerID(cleanerid: any, key: string) {
    // console.log('cleanerid', cleanerid);
    // console.log('key', key);
    return axios.get(`${BaseURL_Rating}/admin/getallratings?start=${0}&length=${10}&cleanerid=${cleanerid}&columns=${"cleanerid"}&orders=${"ASC"}`)
}
// filter by customer id to get customer data
export function filterbyCustomerID(cusomerid: any, key: string) {
    // console.log('cusomerid', cusomerid);
    // console.log('key', key);
    return axios.get(`https://adminapi.carselonadaily.com/api/admin/getallratings?start=1&length=10&customerid=${cusomerid}&columns=customerid&orders=DESC`)
}
// filter by source id to get source data
export function filterbySourceID(sourceid: any, key: string) {
    // console.log('sourceid', sourceid);
    // console.log('key', key);
    return axios.get(`https://adminapi.carselonadaily.com/api/admin/getallratings?start=1&length=10&sourceid=${sourceid}&columns=customerid&orders=DESC`)
}
// get data for filter Option
export function AllRatingFilterAPI() {
    return axios.get(`${BaseURL_Rating}/admin/getfillterlistforrating`)
}