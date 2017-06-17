/*
 * Data
 *
 * @author: Jeff Lee
 * @createdAt: 2016/06/14
 */

const data = {
  name: 'Jeff Lee',
  title: ['Software Engineer', 'Full-Stack Engineer'],
  avatar: 'https://gravatar.com/avatar/9116994a95b11f219055306520647168?s=300',
  email: 'leejefon@gmail.com',
  about: {
    services: [
      {
        title: 'Web Design',
        icon: 'browser',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
      },
      {
        title: 'Copywriter',
        icon: 'pen',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
      },
      {
        title: 'E-Commerce',
        icon: 'cart',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
      },
      {
        title: 'Marketing',
        icon: 'graph1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
      }
    ],
    clients: [
      {
        name: 'Client 1',
        logo: 'images/clients/client_1.png',
        url: '#'
      },
      {
        name: 'Client 2',
        logo: 'images/clients/client_2.png',
        url: '#'
      },
      {
        name: 'Client 3',
        logo: 'images/clients/client_3.png',
        url: '#'
      },
      {
        name: 'Client 4',
        logo: 'images/clients/client_4.png',
        url: '#'
      },
      {
        name: 'Client 5',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'Client 6',
        logo: 'images/clients/client_6.png',
        url: '#'
      }
    ]
  },
  experiences: [
    {
      employer: 'Health IQ',
      position: 'Software Engineer',
      startTime: '2016/05',
      endTime: '',
      blogUrl: '',
      details: [
        ''
      ],
      references: []
    },
    {
      employer: 'Pnyks / DataWallet',
      position: 'Lead Engineer',
      startTime: '',
      endTime: '',
      blogUrl: '',
      details: [
        ''
      ],
      references: [],
      hide: true
    },
    {
      employer: 'TestLegends',
      position: 'Co-Founder and CTO',
      startTime: '',
      endTime: '',
      blogUrl: '',
      details: [
        ''
      ],
      references: [],
      hide: true
    },
    {
      employer: 'Nulogy',
      position: 'Software Developer',
      startTime: '2013/12',
      endTime: '2014/03',
      blogUrl: '',
      details: [
        'Worked on features for Packge Manage in Ruby on Rails'
      ],
      references: []
    },
    {
      employer: 'Konrad Group',
      position: 'Web Developer',
      startTime: '2013/02',
      endTime: '2013/10',
      blogUrl: '',
      details: [
        'Developed several WordPress themes/plugins mostly in <b>PHP</b> and <b>JavaScript</b> for a large corporate using <b>WordPress Multisite</b> feature',
        'Contributed in building internal company portal website that manages info including projects, clients and company staffs in <b>.Net MVC</b>',
        'Occationally Help out other people on their projects, including feature implemenations and bug fixes'
      ],
      references: []
    },
    {
      employer: 'Environment Canada',
      position: 'Software Developer',
      startTime: '2010/05',
      endTime: '2011/09',
      blogUrl: '',
      details: [
        'Added data checksum to the Data Management System core in Java',
        'Implemented a web based data viewer and query API for large data',
        'Developed a web based management interface to manage metadata in XML format'
      ],
      references: []
    }
  ],
  education: [
    {
      school: 'M.Eng @ University of Toronto',
      degree: '<b>Master of Engineering</b> in Computer Engineering',
      startTime: '2012/09',
      endTime: '2013/06',
      blogUrl: '',
      details: [
        {
          name: 'Teaching Assistance for ECE297 Communication and Design Course',
          desc: [
            'Assist Students with coding assignments and projects',
            'Mark the assignments, projects, and Midterm/Final presentations',
            'Final exam invigilation'
          ]
        }
      ]
    },
    {
      school: 'B.A.Sc @ University of Toronto',
      degree: '<b>Bachelor of Applied Science</b> in Computer Engineering',
      startTime: '2007/09',
      endTime: '2012/06',
      blogUrl: '',
      details: [
        {
          name: 'Participated in the 16-month PEY Coop program at Environment Canada as a Software Developer'
        },
        {
          name: '4th Year Design Project - American Sign Language (ASL) Translator using Microsoft Kinect',
          desc: [
            'Developed the Kinect ASL Translator with Microsoft Kinect for Windows SDK',
            'Applicaion writtien in C# with Visual Studio 2010',
            'Divided ASL signs into small gesture components, and program can map the series of gestures to Dictionary class'
          ]
        },
        {
          name: '2nd Year Communication and Design Project - Storage Server',
          desc: [
            'Implemented a multi-threaded server using socket programming with aspect-oriented concept in C',
            'Designed better data storing format for less intensive data parsing, validating, processing',
            'Utilized Subversion to write code as a group and document the code using Doxygen'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Code Smash'
    },
    {
      name: 'Feely'
    },
    {
      name: 'Command Line Lyrics Search'
    },
    {
      name: 'Feely'
    },
    {
      name: 'urly'
    },
    {
      name: 'Interview Questions with TypeScript',
      readme: 'https://github.com/leejefon/interview-with-javascript/blob/master/README.md'
    }
  ],
  certifications: [
    {
      name: 'Cisco Certified Network Associate (CCNA)'
    },
    {
      name: 'CIW Certified Web Development Professional'
    },
    {
      name: 'CIW Certified Web Design Professional'
    },
    {
      name: 'CIW Certified Web Security Professional'
    },
    {
      name: 'CompTIA A+'
    },
    {
      name: 'CompTIA Linux+'
    },
    {
      name: 'CompTIA Network+'
    },
    {
      name: 'CompTIA Security+'
    },
    {
      name: 'Microsoft Certified IT Professional (MCITP) - Database Administrator 2008'
    },
    {
      name: 'Microsoft Certified IT Professional'
    },
    {
      name: 'Microsoft Certified Technology Specialist (MCTS) in Business Desktop Deployment'
    },
    {
      name: 'Microsoft Certified Technology Specialist (MCTS) in SQL Server 2008 Implementation and Maintenance'
    },
    {
      name: 'Microsoft Certified Technology Specialist'
    },
    {
      name: 'Oracle Certified Professional, Java Standard Edition 6 Programmer (former SCJP)'
    },
    {
      name: 'Zend Certified Engineer (ZCE) in PHP 5.3'
    },
    {
      name: 'IBM DB2 Essential Training I Completion'
    },
    {
      name: 'Japanese Language Proficiency Test (JLPT) N3'
    },
    {
      name: 'Life-Only Agent and Accident and Health Agent License'
    }
  ],
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/leejefon',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/leejefon',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/leejefon',
      icon: 'twitter'
    }
  ]
};

export default data;
