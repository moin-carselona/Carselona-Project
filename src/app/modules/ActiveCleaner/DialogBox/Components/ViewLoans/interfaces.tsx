export interface Root  {
  id:               number;
  cleanerid:        number;
  allowance_id:     number;
  amount:           number;
  type:             string;
  is_fixed:         number;
  status:           number;
  createdAt:        number;
  updatedAt:        number;
  master_allowance: MasterAllowance;
}
export interface MasterAllowance {
  id:             number;
  name:           string;
  status:         number;
  default_cash:   number;
  default_points: number;
  createdAt:      null;
  updatedAt:      null;
}