/**
 * Test DB Sample Data
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/05/21
 */

var ObjectID = require('mongodb').ObjectID;

module.exports = {

    resume: [
        {
            name: 'Jeff Lee',
            avatar: '',
            experiences: [
                {
                    employer: 'Nulogy',
                    title: 'Software Developer'
                    startTime: '2013/12',
                    endTime: '2014/03',
                    details: [

                    ],
                    references: [

                    ]
                }
            ],
            education: [
                {
                    school: 'University of Toronto',
                    degree: 'Master of Engineering',
                    startTime: '2012/09',
                    endTime: '2013/06'
                },
                {
                    school: 'University of Toronto',
                    degree: 'Bachelor of Applied Science',
                    startTime: '2007/09',
                    endTime: '2012/06'
                }
            ],
            certifications: [

            ],
            social: [

            ]
        }
    ],

    resume_test: [
        {
            _id: new ObjectID("537c0713e478890b0037d97a")
        }
    ],

    blog_test: [
        {
            _id: new ObjectID("537c0713e478890b0037d97b")
        }
    ]
};
