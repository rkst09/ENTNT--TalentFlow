import Dexie, { type EntityTable } from 'dexie';
import { type Assessment, assessmentsSeed } from '../seed/assessmentsSeed';

class AssessmentsDB extends Dexie {
  assessments!: EntityTable<Assessment, 'id'>;

  constructor() {
    super('AssessmentsDB');
    this.version(1).stores({
      assessments: '&id, jobId'
    });
  }
}

export const assessmentsDb = new AssessmentsDB();

export const initializeAssessments = async () => {
  const count = await assessmentsDb.assessments.count();
  if (count === 0) {
    await assessmentsDb.assessments.bulkAdd(assessmentsSeed);
    console.log(`Seeded ${assessmentsSeed.length} assessments`);
  }
};

export const getAssessmentByJobId = async (jobId: string) => {
  return assessmentsDb.assessments.where('jobId').equals(jobId).first();
};

export const saveAssessment = async (assessment: Assessment) => {
  await assessmentsDb.assessments.put(assessment);
  return assessment;
};

export const submitAssessmentResponse = async (jobId: string, responses: Record<string, any>) => {
  // Store responses in localStorage for this demo
  localStorage.setItem(`assessment-response-${jobId}`, JSON.stringify({
    responses,
    submittedAt: new Date()
  }));
  return { success: true };
};