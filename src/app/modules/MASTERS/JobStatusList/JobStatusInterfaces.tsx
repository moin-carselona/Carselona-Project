
export interface JobStatusInterfaces {
    id:                  number;
    status_name:         string;
    cleaner_app_status:  string;
    customer_app_status: string;
    status_code:         string;
    status_description:  string;
    parent_id:           number;
    action_type_id:      number;
    is_active:           number;
    show_in_app:         number;
    createdAt:           number;
    updatedAt:           number;
}