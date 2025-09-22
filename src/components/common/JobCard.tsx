import React from "react";
import type { Job } from "../../types";
import type { Job } from "../../services/seed/jobsSeed";
import Card from "../ui/Card";

interface JobCardProps {
@@ -60,7 +60,7 @@ const JobCard: React.FC<JobCardProps> = ({ job }) => {
<div className="text-right">
<p className="font-semibold text-gray-900">{job.salary}</p>
<p className="text-gray-500 text-xs">
                {formatDate(job.postedDate)}
                {formatDate(job.createdAt.toString())}
</p>
</div>
</div>