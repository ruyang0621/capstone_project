import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { AddJobForm, Loading, Job } from "../components";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const { showAddJobForm, getJobs, jobs, isLoading, page, totalJobs } =
    useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className="jobs-header">
        <h5>
          {totalJobs} job{totalJobs > 1 && "s"} found
        </h5>
        <button className="btn add-job-btn" onClick={showAddJobForm}>
          + New Job
        </button>
      </div>
      <AddJobForm />
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
