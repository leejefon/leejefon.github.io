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
  phone: '(650) 267-0781',
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
    certifications: [ // Certificates
      {
        name: 'Cisco Certified Network Associate (CCNA)',
        logo: 'images/clients/client_1.png',
        url: '#'
      },
      {
        name: 'CIW Certified Web Development Professional',
        logo: 'images/clients/client_2.png',
        url: '#'
      },
      {
        name: 'CIW Certified Web Design Professional',
        logo: 'images/clients/client_3.png',
        url: '#'
      },
      {
        name: 'CIW Certified Web Security Professional',
        logo: 'images/clients/client_4.png',
        url: '#'
      },
      {
        name: 'CompTIA A+',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'CompTIA Linux+',
        logo: 'images/clients/client_1.png',
        url: '#'
      },
      {
        name: 'CompTIA Network+',
        logo: 'images/clients/client_2.png',
        url: '#'
      },
      {
        name: 'CompTIA Security+',
        logo: 'images/clients/client_3.png',
        url: '#'
      },
      {
        name: 'Microsoft Certified IT Professional (MCITP) - Database Administrator 2008',
        logo: 'images/clients/client_4.png',
        url: '#'
      },
      {
        name: 'Microsoft Certified IT Professional',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'Microsoft Certified Technology Specialist (MCTS) in Business Desktop Deployment',
        logo: 'images/clients/client_1.png',
        url: '#'
      },
      {
        name: 'Microsoft Certified Technology Specialist (MCTS) in SQL Server 2008 Implementation and Maintenance',
        logo: 'images/clients/client_2.png',
        url: '#'
      },
      {
        name: 'Microsoft Certified Technology Specialist',
        logo: 'images/clients/client_3.png',
        url: '#'
      },
      {
        name: 'Oracle Certified Professional, Java Standard Edition 6 Programmer (former SCJP)',
        logo: 'images/clients/client_4.png',
        url: '#'
      },
      {
        name: 'Zend Certified Engineer (ZCE) in PHP 5.3',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'IBM DB2 Essential Training I Completion',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'Japanese Language Proficiency Test (JLPT) N3',
        logo: 'images/clients/client_5.png',
        url: '#'
      },
      {
        name: 'Life-Only Agent and Accident and Health Agent License',
        logo: 'images/clients/client_5.png',
        url: '#'
      }
    ],
    funFacts: [
      {
        title: 'Happy Clients',
        icon: 'smile',
        value: '1,024'
      },
      {
        title: 'Working Hours',
        icon: 'alarm',
        value: '6,256'
      },
      {
        title: 'Awards Won',
        icon: 'medal',
        value: '21'
      },
      {
        title: 'Coffee Consumed',
        icon: 'coffee',
        value: '20,000'
      }
    ],
    testimonials: [
      {
        name: 'Maria Richardson',
        firm: 'Lindsley\'s Lumber',
        text: '"Phasellus eu nunc tincidunt, ultricies elit vitae, pretium eros. Sed sed ipsum sed massa."',
        image: 'images/testimonials/testimonial_photo_1.jpg'
      },
      {
        name: 'John Doe',
        firm: 'Apple Inc.',
        text: '"Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem."',
        image: 'images/testimonials/testimonial_photo_2.jpg'
      },
      {
        name: 'George McQueen',
        firm: 'Harmony House',
        text: '"Aliquam congue auctor lectus sed fermentum. Nulla ultricies tellus quis sapien lacinia egestas."',
        image: 'images/testimonials/testimonial_photo_3.jpg'
      },
      {
        name: 'JCK',
        firm: 'Google Inc.',
        text: '"Phasellus eu nunc tincidunt, ultricies elit vitae, pretium eros. Sed sed ipsum sed massa."',
        image: 'images/testimonials/testimonial_photo_2.jpg'
      }
    ]
  },
  experiences: [
    {
      employer: 'Health IQ',
      position: 'Software Engineer',
      startTime: '2016/05',
      endTime: 'Current',
      blogUrl: '',
      details: [
        'Worked with marketing team on different landing pages to drive more leads in the first 6 months',
        'Started working more on internal tools integrated with Saleforce, such as custom SMS chat tool, Universal app for client applications, using React and Salesforce APEX',
        'Wrote several scripts in node.js to help automate mapping for large amount of client information to third party form generator.  Project involves a lot of load balancing and smart string matching'
      ],
      references: []
    },
    {
      employer: 'Pnyks / DataWallet',
      position: 'Lead Engineer',
      startTime: '2014/12',
      endTime: '2015/12',
      blogUrl: '',
      details: [
        'DataWallet is a data marketplace for users to sell their own data online, and companies can purchase data from our platform for market research purpose, for instance.',
        'Received funding from Tim Draper, founder of DFJ, and Marc Benioff, CEO of Salesforce',
        'One of the 14 startups in Alchemist Accelerator class 10, attended serveral events during the 6-month program, and got connected to many VCs after the demo day',
        'Designed data sourcing modules to get user data from different sources',
        'Implemented user and enterprise platforms with API archiecture authenticated with OAuth in Node.js, including a subset of public APIs for external developers to analyze the data',
        'Managed and worked together with a team of contract front-end developers and data scientists'
      ],
      references: []
    },
    {
      employer: 'TestLegends',
      position: 'Co-Founder and CTO',
      startTime: '2014/03',
      endTime: '2014/12',
      blogUrl: '',
      details: [
        // 'TestLegends aism '
        'Received funding from Tim Draper, founder of DFJ, and BoostVC, a seed-stage accelerator',
        'Developed a platform for users to create or import content from Quizlet and learn by playing games',
        'Designed an API archiecture with OAuth authentication for developers to develop on the TestLegends platform',
        'Worked with Versal, an education platform, and created a TestLegends gadget for their platform'
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
        'Worked on features for Packge Manage in Ruby on Rails',
        'Full test driven development, used RSpec for unit testing and Capybara for acceptance test',
        'Pair programming with different team members serveral times in a day',
        'Learned design patterns, code refactoring, and advanced git flow from senior developers'
      ],
      references: [],
      hide: true
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
      references: [],
      hide: true
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
      references: [],
      hide: true
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
