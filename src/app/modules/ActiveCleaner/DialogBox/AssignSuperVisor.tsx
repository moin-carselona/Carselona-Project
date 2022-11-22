import React from 'react'
import AssigSuper from './Components/AssignSuperVisor/AssigSuper'
const AssignSuperVisor = () => {
  return (
    <>
      <div className=' mr-auto' style={{ width: "850px" }}>
        <AssigSuper></AssigSuper>
      </div>
      <br />
      <button type="submit" className="btn btn-warning">Save changes</button>
    </>
  )
}
export default AssignSuperVisor
