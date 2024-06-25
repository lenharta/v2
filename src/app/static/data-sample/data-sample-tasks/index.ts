interface SampleTask {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: string;
}

const DATA_SAMPLE_TASKS: SampleTask[] = [
  {
    id: 1,
    title: 'Complete Project Proposal',
    description: `Draft the initial project proposal and send it to the team for review.`,
    assignedTo: 'Alice Smith',
    dueDate: '2024-06-25',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Update Website',
    description: `Implement the new design on the company website and ensure all pages are responsive.`,
    assignedTo: 'Bob Johnson',
    dueDate: '2024-06-30',
    status: 'Not Started',
  },
  {
    id: 3,
    title: 'Client Meeting',
    description: `Meet with the client to discuss the project requirements and gather feedback.`,
    assignedTo: 'Carol Williams',
    dueDate: '2024-06-22',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Code Review',
    description: `Review the code submitted by the development team and provide feedback.`,
    assignedTo: 'David Brown',
    dueDate: '2024-06-27',
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Prepare Financial Report',
    description: `Compile the financial report for Q2 and submit it to the finance department.`,
    assignedTo: 'Emma Davis',
    dueDate: '2024-06-28',
    status: 'Not Started',
  },
  {
    id: 6,
    title: 'Organize Team Building Event',
    description: `Plan and organize the team building event scheduled for next month.`,
    assignedTo: 'Frank Miller',
    dueDate: '2024-07-05',
    status: 'Not Started',
  },
  {
    id: 7,
    title: 'Design Marketing Campaign',
    description: `Create the design for the new marketing campaign and coordinate with the marketing team.`,
    assignedTo: 'Grace Wilson',
    dueDate: '2024-06-24',
    status: 'In Progress',
  },
  {
    id: 8,
    title: 'Fix Security Bugs',
    description: `Identify and fix the security vulnerabilities in the application.`,
    assignedTo: 'Henry Moore',
    dueDate: '2024-06-26',
    status: 'In Progress',
  },
  {
    id: 9,
    title: 'Conduct User Testing',
    description: `Organize and conduct user testing sessions for the new feature release.`,
    assignedTo: 'Ivy Taylor',
    dueDate: '2024-06-23',
    status: 'Completed',
  },
  {
    id: 10,
    title: 'Update Documentation',
    description: `Update the project documentation to include the latest changes and improvements.`,
    assignedTo: 'Jack Anderson',
    dueDate: '2024-06-29',
    status: 'Not Started',
  },
];

export { DATA_SAMPLE_TASKS };
