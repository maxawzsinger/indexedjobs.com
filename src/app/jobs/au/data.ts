import { ColumnDef, Table, createColumnHelper } from "@tanstack/react-table";
import { generate10KIncrements } from "@/lib/utils";
import { AllowedFilters } from "@/app/jobs/au/hooks/use-url-search-params";
import { JobData } from "@/app/jobs/au/types";

const columnHelper = createColumnHelper<JobData>();
export const columns: ColumnDef<JobData, any>[] = [
  columnHelper.accessor("job_spy_id", { header: "Job Spy ID" }),
  columnHelper.accessor("site", { header: "Site" }),
  columnHelper.accessor("job_url", { header: "Job URL" }),
  columnHelper.accessor("job_url_direct", { header: "Direct Job URL" }),
  columnHelper.accessor("title", { header: "Title" }),
  columnHelper.accessor("company", { header: "Company" }),
  columnHelper.accessor("location_suburb", { header: "Suburb" }),
  columnHelper.accessor("location_state", { header: "State" }),
  columnHelper.accessor("location_country", { header: "Country" }),
  columnHelper.accessor("date_posted_unix_ts", {
    header: "Date Posted",
    filterFn: (row, columnId, filterValue) =>
      Number(row.getValue(columnId)) >= filterValue,
  }),
  columnHelper.accessor("description", { header: "Description" }),
  columnHelper.accessor("advertised_maximum_salary", {
    header: "Max Salary",
    filterFn: (row, columnId, filterValue) =>
      Number(row.getValue(columnId)) >= filterValue,
  }),
  columnHelper.accessor("advertised_minimum_salary", {
    header: "Min Salary",
    filterFn: (row, columnId, filterValue) =>
      Number(row.getValue(columnId)) >= filterValue,
  }),
  columnHelper.accessor("advertised_salary_interval", {
    header: "Salary Interval",
  }),
  columnHelper.accessor("office_type", { header: "Office Type" }),
  columnHelper.accessor("non_profit_status", { header: "Non-Profit" }),
  columnHelper.accessor("minimum_required_education", {
    header: "Minimum Education",
  }),
  columnHelper.accessor("key_responsibilities", {
    header: "Key Responsibilities",
  }),
  columnHelper.accessor("key_required_technical_skills", {
    header: "Key Skills",
  }),
  columnHelper.accessor("required_experience", {
    header: "Experience Required",
  }),
];

export type filtersType = {
  colName: keyof AllowedFilters;
  label: string;
  options: { label: string; value: string | number }[];
}[];
export const getFilters = (table: Table<JobData>): filtersType => {
  return [
    {
      colName: "location_suburb",
      label: "Suburb",
      options: Array.from(
        table.getColumn("location_suburb")?.getFacetedUniqueValues().keys() ??
          []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "location_state",
      label: "State",
      options: Array.from(
        table.getColumn("location_state")?.getFacetedUniqueValues().keys() ?? []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "location_country",
      label: "Country",
      options: Array.from(
        table.getColumn("location_country")?.getFacetedUniqueValues().keys() ??
          []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "office_type",
      label: "Office type",
      options: Array.from(
        table.getColumn("office_type")?.getFacetedUniqueValues().keys() ?? []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "non_profit_status",
      label: "Non-profit",
      options: Array.from(
        table.getColumn("non_profit_status")?.getFacetedUniqueValues().keys() ??
          []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "minimum_required_education",
      label: "Minimum education",
      options: Array.from(
        table
          .getColumn("minimum_required_education")
          ?.getFacetedUniqueValues()
          .keys() ?? []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "company",
      label: "Company",
      options: Array.from(
        table.getColumn("company")?.getFacetedUniqueValues().keys() ?? []
      ).map((key) => ({ label: key, value: key })),
    },
    {
      colName: "advertised_minimum_salary",
      label: "Minimum salary",
      options: generate10KIncrements(
        table
          .getColumn("advertised_minimum_salary")
          ?.getFacetedMinMaxValues() ?? [0, 0]
      ).map((key) => ({ label: key.toString(), value: key })),
    },
  ];
};

export const dummyData: JobData[] = [
  {
    id: 1,
    created_at: "2024-08-16T01:53:59.800624+00:00",
    job_spy_id: "abc123",
    site: "example.com",
    job_url: "https://example.com/job/abc123",
    job_url_direct: "https://example.com/job/abc123/apply",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location_suburb: "Leichhardt",
    location_state: "NSW",
    location_country: "Australia",
    date_posted_unix_ts: 1692000000,
    description: "Develop and maintain the frontend of our web applications.",
    advertised_maximum_salary: 150000,
    advertised_minimum_salary: 120000,
    advertised_salary_interval: "yearly",
    office_type: "hybrid",
    non_profit_status: "non_profit",
    minimum_required_education: "bachelor degree",
    key_responsibilities:
      "Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend deveLead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.Lead frontend development and collaborate with cross-functional teams.lopment and collaborate with cross-functional teams.",
    key_required_technical_skills: "React, TypeScript, JavaScript, HTML, CSS",
    required_experience: "5+ years of frontend development experience.",
  },
  {
    id: 2,
    created_at: "2024-08-16T01:53:59.800624+00:00",
    job_spy_id: "def456",
    site: "jobboard.com",
    job_url: "https://jobboard.com/job/def456",
    job_url_direct: "https://jobboard.com/job/def456/apply",
    title: "Backend Developer",
    company: "DataSolutions",
    location_suburb: "Surry Hills",
    location_state: "NSW",
    location_country: "Australia",
    date_posted_unix_ts: 1692090000,
    description: "Develop and maintain backend services and APIs.",
    advertised_maximum_salary: 140000,
    advertised_minimum_salary: 110000,
    advertised_salary_interval: "yearly",
    office_type: "remote",
    non_profit_status: "for_profit",
    minimum_required_education: "bachelor degree",
    key_responsibilities: "Design and develop scalable backend systems.",
    key_required_technical_skills: "Node.js, Express, MongoDB, SQL",
    required_experience: "4+ years of backend development experience.",
  },
  {
    id: 3,
    created_at: "2024-08-16T01:53:59.800624+00:00",
    job_spy_id: "ghi789",
    site: "careerpage.org",
    job_url: "https://careerpage.org/job/ghi789",
    job_url_direct: "https://careerpage.org/job/ghi789/apply",
    title: "Project Manager",
    company: "GreenEnergy",
    location_suburb: "Melbourne",
    location_state: "VIC",
    location_country: "Australia",
    date_posted_unix_ts: 1692180000,
    description:
      "Manage renewable energy projects from inception to completion.",
    advertised_maximum_salary: 130000,
    advertised_minimum_salary: 100000,
    advertised_salary_interval: "yearly",
    office_type: "in office only",
    non_profit_status: "for_profit",
    minimum_required_education: "master degree",
    key_responsibilities:
      "Oversee project timelines, budgets, and stakeholder communication.",
    key_required_technical_skills:
      "Project management, renewable energy, budgeting",
    required_experience: "7+ years of project management experience.",
  },
];
