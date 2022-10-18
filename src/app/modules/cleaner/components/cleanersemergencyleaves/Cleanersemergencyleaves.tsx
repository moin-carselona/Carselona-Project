import React, {useEffect, useMemo, useState} from 'react'
import {getCleanerLeagues} from '../../api'

const Cleanersemergencyleaves = () => {
  return (
    <div className='card p-3'>
      <div className='table-responsive px-4'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'></tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'>
            <tr>
              <td colSpan={7}>
                <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                  No matching records found
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cleanersemergencyleaves
