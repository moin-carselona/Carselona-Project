import React, { useState, useEffect } from 'react'
import DialogBox from './DialogBox/DialogBox';

const RatingFilter = ({ onClickFilterCallback, defaultKeyword }) => {
	const [keyword, setKeyword] = React.useState(defaultKeyword)
	const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
	
	const onKeywordChange = (e) => {
		setKeyword(e.target.value)
	}

	

	const onKeyUp = (e) => {
		const timeout = setTimeout(() => {
			onClickFilterCallback(keyword)
		  }, 1000);
		  return () => clearTimeout(timeout);
		
	}

	const handleAddSocietyPopUp = () => {
		setPopUpPostFormOpen(!PopUpPostFormOpen)
		// console.log('PopUpPostFormOpen', PopUpPostFormOpen);
	  }
	const onClickSearch = () => {
		onClickFilterCallback(keyword)
	}
	return (
		<div className="form__form-group">

			<div className='w-100 d-flex justify-content-between mb-3 '>
				<div className='d-flex align-items-start justify-content-start '>
					<input
						type="text"
						placeholder='Search Here'
						value={keyword}
						onChange={onKeywordChange}
						onKeyUp={onKeyUp}
						className='w-100 form-control me-2 align-start'
					/>
					<div className='d-flex align-items-center justify-content-end '>

						<a className="btn btn-sm btn-primary  cursor-pointer" id="kt_toolbar_primary_button" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" onClick={onClickSearch}>Search</a>

					</div>
				</div>
				<div className='d-flex align-items-center justify-content-end '>

						<a className="btn btn-sm btn-primary  cursor-pointer" id="kt_toolbar_primary_button" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" onClick={handleAddSocietyPopUp}>Add Rating</a>

					</div>
			</div>
			{PopUpPostFormOpen && <DialogBox PopUpSocietyBTN={handleAddSocietyPopUp} PopUpPostFormOpen={PopUpPostFormOpen} />}
		</div>
	)
}

export default RatingFilter;