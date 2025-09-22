import Dexie, { type EntityTable } from 'dexie';
import { type Job, jobsSeed } from '../seed/jobsSeed';
import {type Job, jobsSeed } from '../seed/jobsSeed';

class JobsDB extends Dexie {
jobs!: EntityTable<Job, 'id'>;

constructor() {
super('JobsDB');
this.version(1).stores({
      jobs: '&id, slug, status, order, title'
      jobs: '&id, slug, status, order, title, jobType, company' // Added company to index
});
}
}

export const jobsDb = new JobsDB();

export const initializeJobs = async () => {
  // console.log("initializeJobs: Starting job initialization");
const count = await jobsDb.jobs.count();
  // console.log("initializeJobs: Current job count:", count);
if (count === 0) {
    await jobsDb.jobs.bulkAdd(jobsSeed);
    console.log(`Seeded ${jobsSeed.length} jobs`);
    // console.log("initializeJobs: Seeding database with jobs");
     await jobsDb.jobs.bulkAdd(jobsSeed);
    // const res = await jobsDb.jobs.bulkAdd(jobsSeed);
    // console.log("initializeJobs: Bulk add result:", res);
    // console.log(`initializeJobs: Seeded ${jobsSeed.length} jobs`);
  } else {
    console.log("initializeJobs: Database already has jobs, skipping seed");
}
};

export const getAllJobs = async (params?: {
search?: string;
status?: string;
  jobType?: string;
  company?: string; // Added company filter
page?: number;
pageSize?: number;
}) => {
  // console.log("control 1");
  
let query = jobsDb.jobs.orderBy('order');

if (params?.status) {
query = query.filter(job => job.status === params.status);
}

  // console.log("control 2");
  if (params?.jobType && params.jobType !== 'All') {
    query = query.filter(job => job.jobType === params.jobType);
  }

  // Added company filtering
  if (params?.company) {
    query = query.filter(job => job.company === params.company);
  }
  
if (params?.search) {
query = query.filter(job => 
job.title.toLowerCase().includes(params.search!.toLowerCase()) ||
      job.company.toLowerCase().includes(params.search!.toLowerCase()) || // Added company to search
job.tags.some(tag => tag.toLowerCase().includes(params.search!.toLowerCase()))
);
}
@@ -53,6 +75,8 @@ export const getAllJobs = async (params?: {
pageSize: params.pageSize
};
}
  console.log(jobs);
  console.log("control reached");

return { data: jobs, total: jobs.length };
};
@@ -73,7 +97,13 @@ export const updateJob = async (id: string, updates: Partial<Job>) => {
};

export const reorderJob = async (id: string, data: { fromOrder: number; toOrder: number }) => {
  // Implement reorder logic here
await jobsDb.jobs.update(id, { order: data.toOrder });
return jobsDb.jobs.get(id);
};

// Helper function to get all unique companies for filter dropdown
export const getAllCompanies = async () => {
  const jobs = await jobsDb.jobs.toArray();
  const companies = [...new Set(jobs.map(job => job.company))].sort();
  return companies;
};