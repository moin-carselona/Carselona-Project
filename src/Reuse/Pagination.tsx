import React from 'react'
import Pagination from '@mui/material/Pagination';
type Props = {
    handlePaginationBTN: (value: any) => void
    RecordsTotal:any[]
}


export  const Paginations = ({ handlePaginationBTN, RecordsTotal}: Props) => {
   
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
   
      setPage(value);
      handlePaginationBTN(value)
    };
    return (
        <div>
            <Pagination count={Math.ceil(RecordsTotal?.length/10)}  variant="outlined" shape="rounded" page={page} onChange={handleChange}  color="primary" />
        </div>
    )
}
