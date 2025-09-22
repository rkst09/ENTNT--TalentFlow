requirements: string[];
salary: string;
location: string;
  jobType: 'Full-time' | 'Remote' | 'Part-time' | 'Contract';
  company: string; // Added company field
createdAt: Date;
}

@@ -29,6 +31,18 @@ const techTags = [
'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'REST API'
];

// Job types as provided by user
const jobTypes: Job['jobType'][] = ['Full-time', 'Remote', 'Part-time', 'Contract'];

// Popular tech companies for more realistic data
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