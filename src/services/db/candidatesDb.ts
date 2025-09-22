// Mock implementations for candidates DB functions

export async function getAllCandidates({ search, stage, page, pageSize }: { search: string; stage: string; page: number; pageSize: number }) {
  // Return a mock paginated candidates list
  return {
    candidates: [
      { id: '1', name: 'Alice', stage: 'interview' },
      { id: '2', name: 'Bob', stage: 'applied' }
    ],
    page,
    pageSize,
    total: 2
  };
}

export async function updateCandidate(id: string, updates: any) {
  // Return the updated candidate (mock)
  return { id, ...updates };
}

export async function getCandidateTimeline(id: string) {
  // Return a mock timeline
  return [
    { date: '2025-09-01', event: 'Applied' },
    { date: '2025-09-05', event: 'Interviewed' }
  ];
}
