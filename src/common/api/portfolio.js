export const getWorkPortfolio = () =>  {
  return [
    {
      link: 'https://www.fullstackacademy.com/javascript-101',
      title: 'Javascript Part Time Instructor',
      className: 'js101',
      roles: [
        {
          title: 'Part Time Instructor',
          skills: 'Taught Admissions Prep, Javascript 101'
        },
        {
          title: 'Shadow Instructor',
          skills: 'BCP, a Month long course covering Javascript fundamentals'
        }
      ]
    },
    {
      link: 'https://www.fullstackacademy.com/software-engineering-immersive#fullstack-experience',
      title: 'Fullstack Academy',
      className: 'fullstack',
      roles: [
        {
          title: 'Fullstack Fellow',
          skills: 'React, Redux, Sequelize, Node, Express, Passport, Javascript, '
        },
      ]
    },
    {
      title: 'Asamblea San Marcos',
      className: 'sanmarcos',
      roles: [
        {
          title: 'EFL(English as a Foriegn Language) Teacher',
          skills: 'Taught English in the village of Posonicapa as well as in San Marcos.'
        },
      ]
    },
    {
      link: 'http://excel.hmcc.net/#what',
      title: 'Excel Academy',
      className: 'excel',
      roles: [
        {
          title: 'ESL(English as a Second Language) Teacher',
          skills: 'Taught English to recently migrated students.'
        }
      ]
    },
  ]
}

export const getProjectPortfolio = () => {
  return [
    {
      link: 'https://github.com/cartographers/Radar',
      title: 'Radar',
      className: 'radar',
      roles: [
        {
          title: 'Front End Developer',
          skills: 'OO Javascript, React, React-Redux, Sequelize, Bootstrap, Express, Node'
        }
      ]
    },
    {
      link: 'https://github.com/kyusulamita/porqueNoDos',
      title: 'Porque No Los Dos',
      className: 'porqueNo',
      roles: [
        {
          title: 'Fullstack Developer',
          skills: 'Semantic-UI, CSS3, React, React-Redux, Sequelize, Node, FP Javascript'
        }
      ]
    },
    {
      link: 'https://github.com/kyusulamita/whichDoor',
      title: 'Which Door',
      className: 'whichdoor',
      roles: [
        {
          title: 'Sole Developer',
          skills: 'OO C#, Unity, Sprite Rendering'
        }
      ]
    },
  ]
}
