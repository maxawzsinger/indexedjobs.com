"use client";

import * as React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/app/ui/input";
import { JobDetail } from "./job-detail";
import { JobList } from "./job-list";
import { useURLSearchParams } from "@/app/jobs/au/hooks/use-url-search-params";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  getFacetedRowModel,
} from "@tanstack/react-table";
import { columns, getFilters } from "../data";
import { JobsFilters } from "./job-filters";
import { ContentDrawer } from "../../../ui/content-drawer";
import { JobData } from "@/app/jobs/au/types";

export const Jobs = ({ data }: { data: JobData[] }) => {
  const [selectedJobId, setSelectedJobId] = useState<string>();

  const { urlSearchParams } = useURLSearchParams();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(), // if you need a list of values for a column (other faceted row models depend on this one)
    getFacetedMinMaxValues: getFacetedMinMaxValues(), // if you need min/max values
    getFacetedUniqueValues: getFacetedUniqueValues(), // if you need a list of unique values
    state: {
      columnFilters: urlSearchParams,
    },
  });

  return (
    <div className="h-full flex">
      <div className="w-64 border-r-2 hidden md:block">
        <JobsFilters filters={getFilters(table)} />
      </div>
      <div className="flex-1 flex flex-col md:flex-none md:w-96 md:border-r-2">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
            <div className="md:hidden pt-6">
              <ContentDrawer buttonLabel="Filters">
                <JobsFilters filters={getFilters(table)} />
              </ContentDrawer>
            </div>
          </div>
        </div>
        <JobList
          rows={table.getRowModel().rows}
          onSelectJob={(id) => setSelectedJobId(id)}
          currentJobSelectionId={selectedJobId}
        />
      </div>
      <div className="flex-1 hidden md:block">
        <JobDetail
          job={
            table.getRowModel().rows.find((row) => row.id === selectedJobId) ||
            null
          }
        />
      </div>
    </div>
  );
};
