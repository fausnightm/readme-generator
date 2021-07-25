
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**


## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Languages](#Languages)
- [Instructions](#Instructions)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [GitHub Info](#GitHub) 


## Installation

        ${data.installation}

##Languages

${data.built}

##Instructions

${data.Instructions}

## Usage

${data.Usage}

## Credits

${data.Credits}

## License

${data.License}


## Test

${data.tests}



## GitHub

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${data.Email}>

`;
}

module.exports = generateMarkdown;
