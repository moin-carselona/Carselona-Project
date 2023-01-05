import axios from 'axios';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { withSwal } from 'react-sweetalert2';
import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from '../../../apiGlobally';
export default withSwal((props: any, ref: any) => {
    const dispatch = useDispatch()
    //   DAILY-RE-ASSIGN
    const { swal, confirm, cancel, localKey, cleanerid, cleaner_details, attendanceids, userids, attendancestatus } = props;
    React.useEffect(() => {
        if (attendancestatus) {
            swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                // showCancelButton: true,
                confirmButtonText: confirm,
                denyButtonText: cancel,
            }).then((result: any) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    // console.log("confirm")
                    axios.post(`${localKey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/temporarychangeattendance`, {
                        "cleanerid": cleanerid,
                        "attendenceid": attendanceids,
                        "userid": userids
                    }).then((res) => {
                        swal.fire('Saved!', '', 'success')
                        dispatch({ type: "DAILY-RE-ASSIGN", payload: Math.random() + cleanerid })
                    }).catch((error) => {
                        console.log('error', error);
                        swal.fire('Changes denied')
                    })
                } else if (result.isDenied) {
                    // console.log("denied")
                    swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }, [attendancestatus])
});
