export interface Expense {
  isCriticalPolicyViolated: boolean;
  isPolicyViolated: boolean;
  isDraft: boolean;
  isSelected?: boolean;
  isHidden?: boolean;
  showDt?: boolean;
  vendorDetails?: string;
  external_expense_id?: any;
  external_expense_source?: any;
  matched_by?: any;
  ou_band?: any;
  ou_business_unit: string;
  ou_department: string;
  ou_department_id: string;
  ou_employee_id: string;
  ou_id: string;
  ou_joining_dt: string;
  ou_level: string;
  ou_location: string;
  ou_mobile: string;
  ou_org_id: string;
  ou_org_name: string;
  ou_rank: number;
  ou_sub_department: string;
  ou_title: string;
  ou_user_id: string;
  rp_approved_at?: any;
  rp_claim_number?: any;
  rp_purpose?: any;
  rp_reimbursed_at?: any;
  source_account_id: string;
  source_account_type: string;
  transaction_approvals: any;
  tx_activity_details?: any;
  tx_activity_policy_pending?: any;
  tx_admin_amount?: any;
  tx_amount?: any;
  tx_billable: boolean;
  tx_boolean_column1?: any;
  tx_boolean_column10?: any;
  tx_boolean_column2?: any;
  tx_boolean_column3?: any;
  tx_boolean_column4?: any;
  tx_boolean_column5?: any;
  tx_boolean_column6?: any;
  tx_boolean_column7?: any;
  tx_boolean_column8?: any;
  tx_boolean_column9?: any;
  tx_bus_travel_class?: any;
  tx_category?: any;
  tx_corporate_credit_card_expense_group_id?: any;
  tx_cost_center_code?: any;
  tx_cost_center_id?: any;
  tx_cost_center_name?: any;
  tx_created_at: Date;
  tx_creator_id: string;
  tx_currency?: any;
  tx_custom_attributes?: any;
  tx_custom_properties?: any;
  tx_decimal_column1?: any;
  tx_decimal_column10?: any;
  tx_decimal_column2?: any;
  tx_decimal_column3?: any;
  tx_decimal_column4?: any;
  tx_decimal_column5?: any;
  tx_decimal_column6?: any;
  tx_decimal_column7?: any;
  tx_decimal_column8?: any;
  tx_decimal_column9?: any;
  tx_distance?: any;
  tx_distance_unit?: any;
  tx_expense_number: string;
  tx_external_id?: any;
  tx_extracted_data?: any;
  tx_file_ids?: any;
  tx_flight_journey_travel_class?: any;
  tx_flight_return_travel_class?: any;
  tx_from_dt?: Date;
  tx_fyle_category: string;
  tx_hotel_is_breakfast_provided?: any;
  tx_id: string;
  tx_invoice_number?: any;
  tx_is_duplicate_expense?: any;
  tx_is_holiday_expense?: any;
  tx_location_column1?: any;
  tx_location_column10?: any;
  tx_location_column2?: any;
  tx_location_column3?: any;
  tx_location_column4?: any;
  tx_location_column5?: any;
  tx_location_column6?: any;
  tx_location_column7?: any;
  tx_location_column8?: any;
  tx_location_column9?: any;
  tx_locations: any[];
  tx_mandatory_fields_present: boolean;
  tx_manual_flag: boolean;
  tx_mileage_calculated_amount?: any;
  tx_mileage_calculated_distance?: any;
  tx_mileage_is_round_trip?: any;
  tx_mileage_rate?: any;
  tx_mileage_vehicle_type?: any;
  tx_num_days?: any;
  tx_num_files: number;
  tx_org_category: string;
  tx_org_category_code?: any;
  tx_org_category_id: number;
  tx_org_user_id: string;
  tx_orig_amount?: any;
  tx_orig_currency?: any;
  tx_payment_id?: any;
  tx_per_diem_rate_id?: any;
  tx_physical_bill: boolean;
  tx_physical_bill_at?: any;
  tx_policy_amount?: any;
  tx_policy_flag: boolean;
  tx_policy_state?: any;
  tx_project_code?: any;
  tx_project_id?: any;
  tx_project_name?: any;
  tx_purpose?: any;
  tx_receipt_required?: any;
  tx_report_id?: any;
  tx_reported_at?: any;
  tx_risk_state?: any;
  tx_skip_reimbursement: boolean;
  tx_source: string;
  tx_source_account_id: string;
  tx_split_group_id: string;
  tx_split_group_user_amount?: any;
  tx_state: string;
  tx_sub_category: string;
  tx_tax?: any;
  tx_text_array_column1?: any;
  tx_text_array_column10?: any;
  tx_text_array_column2?: any;
  tx_text_array_column3?: any;
  tx_text_array_column4?: any;
  tx_text_array_column5?: any;
  tx_text_array_column6?: any;
  tx_text_array_column7?: any;
  tx_text_array_column8?: any;
  tx_text_array_column9?: any;
  tx_text_column1?: any;
  tx_text_column10?: any;
  tx_text_column11?: any;
  tx_text_column12?: any;
  tx_text_column13?: any;
  tx_text_column14?: any;
  tx_text_column15?: any;
  tx_text_column2?: any;
  tx_text_column3?: any;
  tx_text_column4?: any;
  tx_text_column5?: any;
  tx_text_column6?: any;
  tx_text_column7?: any;
  tx_text_column8?: any;
  tx_text_column9?: any;
  tx_timestamp_column1?: any;
  tx_timestamp_column10?: any;
  tx_timestamp_column2?: any;
  tx_timestamp_column3?: any;
  tx_timestamp_column4?: any;
  tx_timestamp_column5?: any;
  tx_timestamp_column6?: any;
  tx_timestamp_column7?: any;
  tx_timestamp_column8?: any;
  tx_timestamp_column9?: any;
  tx_to_dt?: Date;
  tx_train_travel_class?: any;
  tx_transcribed_data?: any;
  tx_transcription_state?: any;
  tx_txn_dt?: Date;
  tx_updated_at: Date;
  tx_user_amount?: any;
  tx_user_can_delete: boolean;
  tx_user_reason_for_duplicate_expenses?: any;
  tx_user_review_needed?: any;
  tx_vendor?: any;
  tx_vendor_id?: any;
  tx_verification_state?: any;
  us_email: string;
  us_full_name: string;
  tx_categoryDisplayName: string; // custom property added in the service
  tx_dataUrls?: { thumbnail: string }[];
}
