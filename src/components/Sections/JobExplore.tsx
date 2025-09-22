import React, { useState } from "react";
import { SAMPLE_JOBS } from "../../utils/constants";
import React, { useEffect, useState } from "react";
import JobCard from "../common/JobCard";
import Button from "../ui/Button";
import axios from "axios";
import { type Job } from "../../services/seed/jobsSeed";
import SimpleJobSkeleton from "../common/JobSkeleton";

const JobExplore: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
const [visibleJobs, setVisibleJobs] = useState(3);
const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // console.log(
        //   "JobExplore: Making request to /jobs?status=active&pageSize=6"
        // );
        const response = await axios.get("/jobs?status=active&pageSize=6");
        // console.log("JobExplore: Response received:", response);
        // console.log("JobExplore: Response data:", response.data);

        setJobs(response.data.data);
      } catch (error) {
        console.error("JobExplore: Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  console.log(jobs);

const jobTypes = ["All", "Full-time", "Remote", "Part-time", "Contract"];

const filteredJobs =
selectedType === "All"
      ? SAMPLE_JOBS
      : SAMPLE_JOBS.filter((job) => job.type === selectedType);
      ? jobs
      : jobs.filter((job) => job.jobType === selectedType);

  const displayedJobs = filteredJobs.slice(0, visibleJobs);
  const displayedJobs =
    filteredJobs == undefined ? [] : filteredJobs.slice(0, visibleJobs);

const loadMore = () => {
setVisibleJobs((prev) => Math.min(prev + 3, filteredJobs.length));
};

  if (loading) {
    return <SimpleJobSkeleton />;
  }

return (
<section id="jobs" className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -65,7 +97,7 @@ const JobExplore: React.FC = () => {
</div>

{/* Load More Button */}
        {visibleJobs < filteredJobs.length && (
        {visibleJobs < filteredJobs?.length && (
<div className="text-center">
<Button
variant="outline"
@@ -79,7 +111,7 @@ const JobExplore: React.FC = () => {
)}

{/* Empty State */}
        {filteredJobs.length === 0 && (
        {filteredJobs?.length === 0 && (
<div className="text-center py-12">
<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
<svg