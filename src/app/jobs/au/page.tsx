import { Jobs } from "@/app/jobs/au/components/jobs";
import { createClient } from "@supabase/supabase-js";
import { dummyData } from "./data";

const JobsPage = async () => {
  if (!process.env.SUPABASE_KEY || !process.env.SUPABASE_URL) {
    throw new Error(
      "Either the Supabase key or url environment variable is unavailable"
    );
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const { data, error } = await supabase.from("jobs").select();
  // const data = dummyData;
  // const error = false;

  return (
    <>
      <div className="flex-col">
        <header className="w-full p-4 border-b-2">
          <h1 className="text-2xl">IndexedJobs.com</h1>
        </header>
        <Jobs data={error ? [] : data} />
      </div>
    </>
  );
};

export default JobsPage;
