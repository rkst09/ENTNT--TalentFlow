// Mock implementations for jobs DB functions

export async function getAllJobs({ search, status, page, pageSize }: { search: string; status: string; page: number; pageSize: number }) {
  // Return a mock paginated jobs list
  return {
    jobs: [
      { id: '1', title: 'Frontend Developer', status: 'open' },
      { id: '2', title: 'Backend Developer', status: 'closed' }
    ],
    page,
    pageSize,
    total: 2
  };
}

export async function createJob(jobData: any) {
  // Return the created job (mock)
  return { ...jobData, id: String(Date.now()), status: 'open' };
}

export async function updateJob(id: string, updates: any) {
  // Return the updated job (mock)
  return { id, ...updates };
}

export async function reorderJob(id: string, reorderData: any) {
  // Return the reordered job (mock)
  return { id, ...reorderData, reordered: true };
}
