"use client";

import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

import { cn } from "@/lib/utils";
import { Badge } from "@/app/ui/badge";
import { ScrollArea } from "@/app/ui/scroll-area";
import { JobData } from "@/app/jobs/au/types";
import { Row } from "@tanstack/react-table";

export const JobList = ({
  rows,
  onSelectJob,
  currentJobSelectionId,
}: {
  rows: Row<JobData>[];
  onSelectJob: (id: string) => void;
  currentJobSelectionId?: string;
}) => {
  return (
    <ScrollArea className="h-[calc(100vh-15rem)] md:h-[calc(100vh-9rem)]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {rows.length > 0 ? (
          rows.map((row) => (
            <button
              key={row.id}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent min-h-72 md:min-h-32",
                currentJobSelectionId === row.id && "bg-muted"
              )}
              onClick={() => onSelectJob(row.id)}
            >
              {row.renderValue("title")}
              <div className="flex w-full flex-col gap-1 text-xs">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      {row.renderValue("company")}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "ml-auto",
                      currentJobSelectionId === row.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {formatDistanceToNow(
                      new Date(
                        Number(row.getValue("date_posted_unix_ts")) * 1000
                      ),
                      {
                        addSuffix: true,
                      }
                    )}
                  </div>
                </div>
                <div className="text-xs font-medium">
                  {`${row.renderValue("location_suburb")}, ${row.renderValue(
                    "location_state"
                  )} (${row.renderValue("office_type")})`}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="font-bold">Salary: </span>
                {`$${row.renderValue(
                  "advertised_minimum_salary"
                )} - ${row.renderValue(
                  "advertised_maximum_salary"
                )} (${row.renderValue("advertised_salary_interval")})`}
              </div>
              <div className="flex-1 whitespace-pre-wrap text-xs space-y-4 md:hidden">
                <div className="line-clamp-2">
                  <span className="font-bold">Responsibilities: </span>
                  {row.renderValue("key_responsibilities")}
                </div>
                <div className="line-clamp-2">
                  <span className="font-bold">Required technical skills: </span>
                  {row.renderValue("key_required_technical_skills")}
                </div>
                <div className="line-clamp-2">
                  <span className="font-bold">Required experience: </span>
                  {row.renderValue("required_experience")}
                </div>
                <div className="font-bold underline">
                  <a
                    href={row.getValue("job_url")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to original job posting
                  </a>
                </div>
              </div>
              {row.renderValue("non_profit_status") === "non_profit" ? (
                <Badge variant="default">Non profit</Badge>
              ) : null}
            </button>
          ))
        ) : (
          <div>No jobs available for this filter selection.</div>
        )}
        {}
      </div>
    </ScrollArea>
  );
};
