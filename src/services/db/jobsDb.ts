import Dexie, { type EntityTable } from 'dexie';
<<<<<<< HEAD
import {type Job, jobsSeed } from '../seed/jobsSeed';

class JobsDB extends Dexie {
  jobs!: EntityTable<Job, 'id'>;

  constructor() {
    super('JobsDB');
    this.version(3).stores({
      jobs: '&id, slug, status, order, title, jobType, createdAt'
    });
  }
=======
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
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
}

export const jobsDb = new JobsDB();

export const initializeJobs = async () => {
<<<<<<< HEAD
  try {
    const jobsCount = await jobsDb.jobs.count();
    if(jobsCount > 0) {
      return;
    }

    // console.log("initializeJobs: Starting job initialization");
    
    // Clear existing jobs to ensure fresh data 
    // console.log("initializeJobs: Clearing existing jobs for fresh seed");
    await jobsDb.jobs.clear();
    
    // console.log("initializeJobs: Seeding database with fresh jobs");
    await jobsDb.jobs.bulkAdd(jobsSeed);
    // console.log(`initializeJobs: Seeded ${jobsSeed.length} jobs`);
    
  } catch (error) {
    console.error("initializeJobs: Error initializing jobs:", error);
  }
};

export const getAllJobs = async (params?: {
  search?: string;
  status?: string;
  jobType?: string;
  page?: number;
  pageSize?: number;
}) => {
  try {
    // console.log("getAllJobs: Called with params:", params);
    
    let query = jobsDb.jobs.orderBy('createdAt');
  
  if (params?.status) {
    query = query.filter(job => job.status === params.status);
  }
  
=======
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

>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
  // console.log("control 2");
  if (params?.jobType && params.jobType !== 'All') {
    query = query.filter(job => job.jobType === params.jobType);
  }

<<<<<<< HEAD
  
  if (params?.search) {
    query = query.filter(job => 
      job.title.toLowerCase().includes(params.search!.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(params.search!.toLowerCase()))
    );
  }

  const jobs = await query.toArray();
  
  if (params?.page && params?.pageSize) {
    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    return {
      data: jobs.slice(start, end),
      total: jobs.length,
      page: params.page,
      pageSize: params.pageSize
    };
  }
  // console.log("getAllJobs: Returning jobs:", jobs.length);
  
  return { data: jobs, total: jobs.length };
  } catch (error) {
    console.error("getAllJobs: Error fetching jobs:", error);
    return { data: [], total: 0 };
  }
};

export const createJob = async (jobData: Omit<Job, 'id' | 'createdAt' | 'slug' | 'order'>) => {
  const count = await jobsDb.jobs.count();
  const slug = jobData.title.toLowerCase().replace(/\s+/g, '-') + '-' + Math.random().toString(36).substr(2, 4);

  const newJob: Job = {
    ...jobData,
    id: `job-${Date.now()}`,
    slug,
    order: count,
    createdAt: new Date()
  };
  await jobsDb.jobs.add(newJob);
  return newJob;
};

export const updateJob = async (id: string, updates: Partial<Job>) => {
  await jobsDb.jobs.update(id, updates);
  return jobsDb.jobs.get(id);
};

export const reorderJob = async (id: string, data: { fromOrder: number; toOrder: number }) => {
  await jobsDb.jobs.update(id, { order: data.toOrder });
  return jobsDb.jobs.get(id);
};

export const deleteJob = async (id: string) => {
  await jobsDb.jobs.delete(id);
  return true;
};


// Dashboard statistics functions
export const getJobStatistics = async () => {
  const allJobs = await jobsDb.jobs.toArray();
  const activeJobs = allJobs.filter(job => job.status === 'active');
  
  return {
    totalJobs: allJobs.length,
    activeJobs: activeJobs.length,
    archivedJobs: allJobs.length - activeJobs.length
  };
};
=======
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
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
