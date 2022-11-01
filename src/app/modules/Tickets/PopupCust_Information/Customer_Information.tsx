import React from 'react'

import "./PopCss.css"
const Customer_Information = ({ }: any) => {
    return (
        // <div>
        //     <div className="row mb-3">
        //         <label  htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
        //         <div className="col-sm-10">
        //             <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
        //         </div>
        //     </div>
        //     <div className="row mb-3">
        //         <label   htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
        //         <div className="col-sm-10">
        //             <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label"/>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <label   htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
        //         <div className="col-sm-10">
        //             <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
        //         </div>
        //     </div>
        // </div>





        <>

            <div className="page-content page-container " id="page-content" style={{width:"720px"}}>
                <div className="padding" style={{width:"100%",height:"100%"}}>
                    <div className="row container d-flex justify-content-center" style={{width:"100%",height:"100%" ,marginLeft:'-60px'}}>
                        <div className="col-xl-6 col-md-12" style={{width:"100%",height:"100%"}}>
                            <div className="card user-card-full" style={{width:"100%",height:"100%"}}>
                                <div className="row m-l-0 m-r-0" style={{width:"100%",height:"100%", }}>
                                    <div className="col-sm-3 bg-primary user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="f-w-600">Pritesh Singh</h6>
                                            <p>Vivek Agarwal</p>
                                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className=" f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Subcription Details</h6>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <p className="m-b-10 f-w-600">Active Subscription</p>
                                                    <h6 className="text-muted f-w-400"> 1 Active </h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className="m-b-10 f-w-600">Pending Subscription</p>
                                                    <h6 className="text-muted f-w-400">0 Pending</h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <p className="m-b-10 f-w-600">Upcoming Subscription</p>
                                                    <h6 className="text-muted f-w-400">2 Pending</h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Customer_Information




