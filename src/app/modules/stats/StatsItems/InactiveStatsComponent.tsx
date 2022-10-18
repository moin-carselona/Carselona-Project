import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import { muiColumns } from "../../apps/user-management/users-list/table/columns/statsColumns";

type Props = {
    inactiveSubscriptions: any,
    isLoading: boolean
}

const InactiveStatsComponent: FC<Props> = (props: Props) => {
    const { inactiveSubscriptions, isLoading } = props;
    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center h-75 flex-column">
                <div className="spinner-border mr-15" role="status">
                </div>
                <h4 className="fw-bold">Loading...</h4>
            </div>
        )
    }
    return (
        <div className="card-header border-0 pt-6">
            <div className='d-flex align-items-center justify-content-center my-2'>
                <input
                    type='text'
                    data-kt-user-table-filter='search'
                    className='form-control form-control-solid  w-50 bg-white'
                    placeholder='Search user'
                />
                <button className="btn btn-secondary"> Search </button>
            </div>

            <div style={{ height: '75vh', width: '100%' }}>
                {inactiveSubscriptions?.length ? <DataGrid
                    rows={inactiveSubscriptions}
                    columns={muiColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                /> : <div className="d-flex align-items-center justify-content-center">
                    <h1>No matching data found</h1>
                </div>}
            </div>
        </div>
    )
}

export default InactiveStatsComponent;