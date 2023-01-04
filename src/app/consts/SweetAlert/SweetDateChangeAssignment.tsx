import axios from 'axios';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { withSwal } from 'react-sweetalert2';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
export default withSwal((props: any, ref: any) => {
    const dispatch = useDispatch()
    const { swal, confirm, cancel, localKey, attendancestatus, cleanerid, cleanerTimeSlotid, cleanerDateSlotID, attendaceids, randomValues } = props;

    React.useEffect(() => {
        if (attendancestatus) {
            swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                // showCancelButton: true,
                confirmButtonText: confirm,
                denyButtonText: cancel,
            }).then((result: any) => {
                if (result.isConfirmed) {
                    axios.post(`${localKey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/cleanerattendencebyid`, {
                        "cleanerid": cleanerid,
                        "attendenceid": +attendaceids,
                        "date": cleanerDateSlotID,
                        "timeslot": cleanerTimeSlotid
                    }).then((res) => {
                        swal.fire('Saved!', '', 'success')
                        dispatch({ type: "DAILY-RE-ASSIGN-DATE-CHANGE", payload: Math.random() })
                        dispatch({ type: "TRACK_ASSSIGNING", payload: randomValues })
                        dispatch({ type: "TRACK_ASSSIGNING_CANCELED", payload: "" })

                    }).catch((error) => {
                        console.log('error', error);
                        swal.fire('Changes denied')

                    })
                } else if (result.isDenied) {
                    
                    dispatch({ type: "TRACK_ASSSIGNING_CANCELED", payload: randomValues })
                    swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }, [attendancestatus])
});
