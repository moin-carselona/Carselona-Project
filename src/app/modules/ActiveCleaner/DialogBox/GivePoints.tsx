import React from 'react'
import Points from './Components/GivePoints/Points'
const GivePoints = () => {
  return (
    <>
      <div className=' mr-auto' style={{ width: "850px" }}>
        <Points></Points>
      </div>
      <br />
      <button type="submit" className="btn btn-warning"><i className="fa fa-plus-circle mr-2"></i>Create
        Reward</button>
    </>
  )
}
export default GivePoints
