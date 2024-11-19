// Required dependencies
import fs from 'fs';
import inquirer from 'inquirer';

// Function to generate README template
function generateReadme(answers) {
    return `
  # ${answers.title}
  
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
  ${answers.demo}
  
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
      type: 'input',
      name: 'demo',
      message: 'Provide demo instructions:',
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

  // Function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(answers => {
        const readmeContent = generateReadme(answers);
        fs.writeFileSync('README.md', readmeContent, (err) => {
          if (err) throw err;
          console.log('README.md has been successfully created!');
        });
        console.log('README.md generated successfully!');
      })
      .catch(err => {
        console.error('Error generating README:', err);
      });
  }
  
  // Call to initialize app
  init();
