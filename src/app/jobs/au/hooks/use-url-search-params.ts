import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { JobData } from "@/app/jobs/au/types";

// Define the allowed filters by picking specific keys from JobData
export type AllowedFilters = Pick<
  JobData,
  | "company"
  | "location_suburb"
  | "location_state"
  | "location_country"
  | "office_type"
  | "non_profit_status"
  | "minimum_required_education"
  | "date_posted_unix_ts"
  | "advertised_minimum_salary"
>;

export function useURLSearchParams() {
  const searchParams = useSearchParams();

  const urlSearchParams = useMemo(() => {
    return Array.from(searchParams.entries()).map(([id, value]) => ({
      id,
      value,
    }));
  }, [searchParams]);

  // Function to add or update a parameter in the search params
  const addOrReplaceURLSearchParam = (
    key: keyof AllowedFilters,
    value: AllowedFilters[keyof AllowedFilters]
  ) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    if (value !== undefined && value !== null) {
      updatedParams.set(key, value.toString());
    }
    // Update the URL with new parameters
    const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  // Function to delete a parameter from the search params
  const deleteURlSearchParam = (key: keyof AllowedFilters) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete(key);
    // Update the URL with new parameters
    const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  // Return the params object, and the add/delete functions
  return {
    urlSearchParams,
    addOrReplaceURLSearchParam,
    deleteURlSearchParam,
  };
}
