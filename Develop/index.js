// Required dependencies
import fs from 'fs';
import inquirer from 'inquirer';

// Function to generate README template
function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ${licenseBadges[answers.license]}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Demo
  ${answers.tests}
  
  ## Questions
  If you have any questions, feel free to contact me:
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: ${answers.email}
    `;
  }

  // Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: input => input ? true : 'Please provide a project title.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
      validate: input => input ? true : 'Please provide a project description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the installation instructions:',
      validate: input => input ? true : 'Please provide installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
      validate: input => input ? true : 'Please provide usage information.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
      validate: input => input ? true : 'Please provide contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
      validate: input => input ? true : 'Please provide test instructions.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: input => input ? true : 'Please provide your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: input => input ? true : 'Please provide your email address.',
    },
  ];
  