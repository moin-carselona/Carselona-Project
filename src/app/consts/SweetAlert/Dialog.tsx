import axios from 'axios';
import React, { memo } from 'react';
import { withSwal } from 'react-sweetalert2';
import { MAIN_API_BASE_API_URL, TEST_API_BASE_API_URL } from '../../../apiGlobally';
export default withSwal((props: any, ref: any) => {
    console.log('ref', ref);
    // console.log('props', props);
    const { swal, confirm, cancel,attendancestatus, id, localKey } = props;
    // console.log('id', id);git [u]
    // console.log('attendancestatus', attendancestatus);
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
                    axios.post(`${localKey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/changeCleanerAttendanceStatus`, { "id": id, "attendance_status": attendancestatus }).then((res) => {
                        swal.fire('Saved!', '', 'success')
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
