const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'ZC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Lenny Zeitoun',
  role: 'Software Engineer, Blockchain Enthusiast',
  description:
    'I am a software engineer with a passion for building software that improves the lives of people. I love to create things that make a difference and I am always looking to learn more. Also I am a blockchain enthusiast and looking for a job in this industry.',
  resume: 'https://zeitouncorporate.com/public_assets/me_profile.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/lenny-zeitoun/',
    github: 'https://github.com/ZeitounCorp',
  },
}

const projects = [
  {
    name: 'NodeJs (/NginX) load-balancer',
    description:
      'First open source load balancer for NodeJs. This project aims to be an optimized, low-cost, easily maintainable, auto-scaling load-balancer for NodeJs applications.',
    stack: [
      'NodeJs',
      'React',
      'Express',
      'LowDB',
      'PM2',
      'Docker',
      'AWS',
      'NginX',
    ],
    sourceCode: 'https://github.com/ZeitounCorp/load-balancer/',
    livePreview: 'https://github.com/ZeitounCorp/load-balancer/',
  },
  {
    name: 'Extend-data-structures.js',
    description:
      "Research around methods that I would have loved having straight out of the box on Arrays and Object, egc: .forEach on Objects, transform a 2D Array into an Object (key example: i1j0: 'foo')...",
    stack: ['NodeJS', 'LowDB', 'Javascript'],
    sourceCode: 'https://github.com/ZeitounCorp/extend-data-structures.js',
    livePreview: 'https://github.com/ZeitounCorp/extend-data-structures.js',
  },
  {
    name: 'LogForWorker',
    description:
      'As a software engineer and team leader, I\'ve been working on a project that is a proof of concept for a new type of logging system. The idea is to create a system that can be used by workers to log their work and then be used by the team leader to review the logs and see what is going on. The system is built on Bash and Shell scripting.',
    stack: ['Bash', 'Shell'],
    sourceCode: 'https://github.com/ZeitounCorp/logForWorker',
    livePreview: 'https://github.com/ZeitounCorp/logForWorker',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'Solidity',
  'Python',
  'C',
  'Java',
  'Shell',
  'Dart',
  'React',
  'React Native',
  'Angular',
  'Vue.js',
  'Redux',
  'SASS',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'GitLab',
  'CI/CD',
  'Node.js',
  'Meteor',
  'Express',
  'MongoDB',
  'Firebase',
  'Redis',
  'Blockchain',
  'AWS',
  'Docker',
  'GCP',
  'Heroku',
  'Linux',
  'Netlify',
  'VSCode',
  'Webstorm',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lenny@zeitouncorporate.com',
}

export { header, about, projects, skills, contact }
