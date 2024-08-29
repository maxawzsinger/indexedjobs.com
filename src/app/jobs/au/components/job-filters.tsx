"use client";
import { useURLSearchParams } from "@/app/jobs/au/hooks/use-url-search-params";
import { filtersType, getFilters } from "@/app/jobs/au/data";
import { Combobox } from "../../../ui/combobox";
import { Table } from "@tanstack/react-table";
import { JobData } from "../types";

export const JobsFilters = ({ filters }: { filters: filtersType }) => {
  const { urlSearchParams, addOrReplaceURLSearchParam, deleteURlSearchParam } =
    useURLSearchParams();
  console.log(filters);

  console.log(urlSearchParams);

  return (
    <div className="group flex flex-col gap-4 py-2 pl-6">
      {filters.map((filter) => {
        console.log(filter.colName);

        console.log(
          urlSearchParams.find((param) => param.id === filter.colName)?.value
        );
        const value = urlSearchParams.find(
          (param) => param.id === filter.colName
        )?.value;
        console.log("value", value);
        return (
          <Combobox
            options={filter.options}
            placeholder={filter.label}
            onSelect={(value) =>
              addOrReplaceURLSearchParam(filter.colName, value)
            }
            onReset={() => deleteURlSearchParam(filter.colName)}
            key={filter.label}
            currentSelection={value}
          />
        );
      })}
    </div>
  );
};
