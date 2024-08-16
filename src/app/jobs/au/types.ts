export type JobData = {
  id: number;
  created_at: string;
  job_spy_id: string;
  site: string;
  job_url: string;
  job_url_direct: string;
  title: string;
  company: string;
  location_suburb: string;
  location_state: string;
  location_country: string;
  date_posted_unix_ts: number;
  description: string;
  advertised_maximum_salary: number;
  advertised_minimum_salary: number;
  advertised_salary_interval: "hourly" | "yearly"; //not in supabase
  office_type: "remote" | "hybrid" | "in office only";
  non_profit_status: "non_profit" | "for_profit";
  minimum_required_education: //not in supabase
  | "high school"
    | "associate degree"
    | "bachelor degree"
    | "master degree"
    | "doctorate";
  key_responsibilities: string;
  key_required_technical_skills: string;
  required_experience: string;
};
