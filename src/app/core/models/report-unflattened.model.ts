export interface OrgUser {
  business_unit?: string;
  department?: string;
  department_id?: string;
  employee_id?: string;
  id: string;
  level?: string;
  location?: string;
  mobile: string;
  org_id: string;
  org_name: string;
  status: string;
  sub_department?: string;
  title?: string;
}

export interface Report {
  amount: number;
  approvals: any;
  approved_at: Date;
  claim_number: string;
  created_at: Date;
  currency: string;
  exported: any;
  from_dt: Date;
  id: string;
  location1: any;
  location2: any;
  location3: any;
  location4: any;
  location5: any;
  locations: any[];
  manual_flag: boolean;
  num_transactions: number;
  org_user_id: string;
  physical_bill: boolean;
  physical_bill_at: Date;
  policy_flag: boolean;
  purpose: string;
  reimbursed_at: Date;
  risk_state: any;
  risk_state_expense_count: number;
  settlement_id: string;
  source: string;
  state: string;
  submitted_at: Date;
  tax: any;
  to_dt: Date;
  trip_request_id: string;
  type: string;
  verification_state: string;
}

export interface User {
  email: string;
  full_name: string;
}

export interface UnflattenedReport {
  ou: OrgUser;
  rp: Report;
  us: User;
}
