import { format } from "date-fns/format";
import { Separator } from "@/app/ui/separator";
import { Row } from "@tanstack/react-table";
import { JobData } from "@/app/jobs/au/types";
interface JobDetailProps {
  job: Row<JobData> | null;
}

export const JobDetail = ({ job }: JobDetailProps) => {
  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2"></div>
      {job ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="font-semibold">{job.renderValue("title")}</div>
                <div className="font-semibold">{`${job.renderValue(
                  "location_suburb"
                )}, ${job.renderValue("location_state")} (${job.renderValue(
                  "office_type"
                )})`}</div>
                <div className="text-xs">{job.renderValue("company")}</div>
              </div>
            </div>
            <div className="ml-auto text-xs text-muted-foreground">
              {format(
                new Date(Number(job.renderValue("date_posted_unix_ts")) * 1000),
                "PPpp"
              )}
            </div>
          </div>
          <Separator />

          <div className="flex-1 whitespace-pre-wrap p-4 text-sm space-y-4">
            <div>
              <span className="font-bold">Salary: </span>
              {`$${job.renderValue(
                "advertised_minimum_salary"
              )} - ${job.renderValue(
                "advertised_maximum_salary"
              )} (${job.renderValue("advertised_salary_interval")})`}
            </div>
            <div>
              <span className="font-bold">Responsibilities: </span>
              {job.renderValue("key_responsibilities")}
            </div>
            <div>
              <span className="font-bold">Required technical skills: </span>
              {job.renderValue("key_required_technical_skills")}
            </div>
            <div>
              <span className="font-bold">Required experience: </span>
              {job.renderValue("required_experience")}
            </div>
            <div className="text-xs font-bold underline">
              <a
                href={job.getValue("job_url")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Full job description
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          Welcome to IndexedJobs.com!
        </div>
      )}
    </div>
  );
};
