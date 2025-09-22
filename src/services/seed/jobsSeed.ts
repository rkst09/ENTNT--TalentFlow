<<<<<<< HEAD
import { faker } from '@faker-js/faker';

faker.seed(12345); // For consistent data across refreshes

export interface Job {
  id: string;
  title: string;
  slug: string;
  status: 'active' | 'archived';
  tags: string[];
  order: number;
  description: string;
  requirements: string[];
  salary: string;
  location: string;
  jobType: 'Full-time' | 'Remote' | 'Part-time' | 'Contract';
  createdAt: Date;
}

const jobTitles = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'UI/UX Designer', 'Product Manager', 'Data Scientist',
  'DevOps Engineer', 'Mobile Developer', 'QA Engineer',
  'Project Manager', 'Business Analyst', 'Marketing Manager'
];

const techTags = [
  'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java',
  'TypeScript', 'JavaScript', 'AWS', 'Docker', 'Kubernetes',
  'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'REST API'
=======
requirements: string[];
salary: string;
location: string;
  jobType: 'Full-time' | 'Remote' | 'Part-time' | 'Contract';
  company: string; // Added company field
createdAt: Date;
}

@@ -29,6 +31,18 @@ const techTags = [
'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'REST API'
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
];

// Job types as provided by user
const jobTypes: Job['jobType'][] = ['Full-time', 'Remote', 'Part-time', 'Contract'];

// Popular tech companies for more realistic data
<<<<<<< HEAD

function generateJob(index: number): Job {
  const title = faker.helpers.arrayElement(jobTitles);
  const slug = title.toLowerCase().replace(/\s+/g, '-') + '-' + faker.string.alphanumeric(4);
  
  return {
    id: `job-${index + 1}`,
    title,
    slug,
    status: faker.helpers.arrayElement(['active', 'active', 'active', 'archived']), // 75% active
    tags: faker.helpers.arrayElements(techTags, { min: 2, max: 5 }),
    order: index,
    description: faker.lorem.paragraphs(2),
    requirements: Array.from({ length: faker.number.int({ min: 3, max: 6 }) }, 
      () => faker.lorem.sentence()
    ),
    salary: `$${faker.number.int({ min: 50, max: 200 })}K - $${faker.number.int({ min: 200, max: 300 })}K`,
    location: faker.location.city() + ', ' + faker.location.state(),
    jobType: faker.helpers.arrayElement(jobTypes),
    createdAt: faker.date.past({ years: 1 })
  };
}

export const jobsSeed: Job[] = Array.from({ length: 25 }, (_, i) => generateJob(i));
=======
const techCompanies = [
  'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix',
  'Spotify', 'Uber', 'Airbnb', 'Stripe', 'Shopify', 'Slack',
  'Zoom', 'Atlassian', 'Adobe', 'Salesforce', 'Oracle', 'IBM',
  'Intel', 'NVIDIA', 'Tesla', 'SpaceX', 'Twitter', 'LinkedIn',
  'Pinterest', 'Snapchat', 'TikTok', 'Discord', 'GitHub', 'GitLab'
];

function generateJob(index: number): Job {
const title = faker.helpers.arrayElement(jobTitles);
const slug = title.toLowerCase().replace(/\s+/g, '-') + '-' + faker.string.alphanumeric(4);
@@ -46,6 +60,8 @@ function generateJob(index: number): Job {
),
salary: `$${faker.number.int({ min: 50, max: 200 })}K - $${faker.number.int({ min: 200, max: 300 })}K`,
location: faker.location.city() + ', ' + faker.location.state(),
    jobType: faker.helpers.arrayElement(jobTypes),
    company: faker.helpers.arrayElement(techCompanies), // Added company selection
createdAt: faker.date.past({ years: 1 })
};
}
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
