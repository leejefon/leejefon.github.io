/**
 * Test DB Sample Data
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/21
 */

var ObjectID = require('mongodb').ObjectID;

module.exports = {

    resume_test: [
        {
            name: 'Jeff Lee',
            avatar: 'https://gravatar.com/avatar/9116994a95b11f219055306520647168?s=300',
            bio: {
                title: 'Software Developer',
                current: {
                    employer: 'TestLegends',
                    position: 'Co-Founder and CTO',
                    url: 'https://www.testlegends.com',
                    blogUrl: '',
                    details: ''
                }
            },
            experiences: [
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
                    name: 'URLy',
                    tagline: 'Yet another URL shortener',
                    category: '',
                    thumbnail: '',
                    image: '',
                    details: ''
                },
                {
                    name: 'GitStar It!',
                    tagline: 'Organize GitHub starred projects in a easier way',
                    category: '',
                    thumbnail: '',
                    image: '',
                    details: ''
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
                }
            ],
            social: [
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/leejefon',
                    icon: 'linked_in'
                },
                {
                    name: 'GitHub',
                    url: 'https://www.github.com/leejefon',
                    icon: 'github'
                // },
                // {
                //     name: 'StackOverflow',
                //     url: 'http://stackoverflow.com/users/1699324/jeff-lee',
                //     icon: 'facebook-square'
                }
            ]
        }
    ]
};
