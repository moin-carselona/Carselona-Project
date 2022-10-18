/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteUser} from '../../core/_requests'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios'

type Props = {
  id: ID,
  data: any
}

const ServerInactiveActionColumns: FC<Props> = ({id, data}) => {
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = React.useState<any>([]);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, [])

  const deleteItem = useMutation(() => deleteUser(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    },
  })

  const updateStatus = (id: ID) => {
    data.filter((item: any) => {
      if(item.id === id){
        setFilteredData(item);
      }
    })
    let filteredData = data.filter((item: any) => item.id === id)[0];

    const formData = new FormData();
    formData.append('vehicleid', filteredData.vehicleid);
    formData.append('required_after_cleaning_photos', filteredData.required_after_cleaning_photos);

    axios.post('https://adminapi.carselonadaily.com/api/admin/updateVehicleImage', formData).then(response => {
      alert("Vehicle updated successfully!");
    }).catch(error => {
      console.log(error);
      alert("Something went wrong!");
    })
  }

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-danger text-white'>
            Change Status
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {ServerInactiveActionColumns}
