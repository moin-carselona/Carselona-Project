export interface Root {
  id: number;
  cleanerid: number;
  cleaner_payout_scheme_id: number;
  min_earning_week: number;
  scheme_assigned_date: Date;
  scheme_paused_date: string;
  status: number;
  createdAt: number;
  updatedAt: number;
  cleanerPayoutScheme: CleanerPayoutScheme;
}
export interface CleanerPayoutScheme {
  id: number;
  scheme_name: string;
  city_id: number;
  status: number;
  createdAt: null;
  updatedAt: null;
}
