import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faChessBoard, faCodeFork, faIndustry, faMoneyCheck, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const config = {
    introduction: [
        `A technically highly motivated full stack web developer with 13 years of hands-on experience in designing, developing, implementing applications and solutions using a range of technologies and programing languages. Seeking to leverage broad development experience and hands-on technical expertise in challenging roles as a full stack developer.`,
    ],
    quickMe: `Skilled and motivated Javascript Full-Stack developer with 13 years of experience.`,
    location: 'Bangalore',
    address: 'B-405, Signature Classic Apartment, Sompura Village, Ambalipura-Sarjapura Road, Bangalore',
    workExp: [
        {
            name: 'Tata Consultancy Services',
            role: 'Technical Lead',
            about: `Tata Consultancy Services is an Indian multinational information technology services and consulting company, I am working for a Envestnet client, with the tech stack of Next.js, React.js, Redux, SASS, and HTML5.`,
            desc: [
                "Participating in sprint plan meetings, identifying dependencies, grooming user stories, providing UI solutions and sizing UI stories.",
                "Guiding team to develop and support REST api implementation of Express.js framework.",
                "Participating in post-production support, debugging production issues and providing analysis.",
                "Recently, I worked with a team of 10 members (two scrum teams) to identify reusable components to prepare high-level design documents for the epic.",
                "Worked with browser dependency issues to ensure the web interface works seamlessly in all browsers.",
                "Recently I have proposed and implemented a configurable solution for the PostMessage object structure for each individual co-brand (client) of the FastLink FL4 application."
            ],
            start: new Date(2022, 10, 16),
            end: null,
            icon: faNetworkWired,
            displayDesc: true,
        },
        {
            name: 'Yodlee Infotech Private Limited',
            role: 'Member Of Technical Staff',
            about: `Envestnet | Yodlee, provides an industry leading data aggregation and data analytics platform. I am working for a core Engineering team, with the tech stack of Next.js, React.js, Redux, SASS, and HTML5.`,
            desc: [
                "Hands-on experience with React UI-Components development using the StoryBook library.",
                "Implemented front end components utilizing React.js, TailwindCSS plugins like daisyui, hyperUI.",
                "I built an internal boilerplate for React projects to maintain common features: Yodlee SSO, React, style guide.",
                "Developed unit test and integration test using Jest and inspect components hierarchy with React/Redux dev tool in Chrome.",
                "Working with Nodejs, sequelize, graphql to write back-end services.",
                "Developed a backend single end point API using GraphQL-Yoga library. Worked on building application schema definitions and respective resolver functions.",
                "Responsible for building, deployment of code base in lower/ production environments and fixing defects during SIT and UAT testing."
            ],
            start: new Date(2020, 4, 0),
            end: new Date(2022, 10, 14),
            icon: faMoneyCheck,
            displayDesc: true,
        },
        {
            name: 'GE Digital',
            role: 'Sr Software Engineer',
            about: `GE Digital is a subsidiary of the General Electric, builds various Industrial software solutions. 
            I have worked with "Asset Performance Management (APM)" solution as a UI-Developer with React.js, Redux, Hightcharts visualization frameworks.`,
            desc: [
                "Worked closely with Architects, System Analysts and UX designers to understand the requirements.",
                "Designed and developed the application using agile methodology and followed the TDD (Test Driven Development), Scrum model. Participated in daily stand-up meetings with Scrum Master.",
                "Developed single page applications using React Redux architecture, ES6, web pack and grunt.",
                "Used SASS with its variables, operations and functions features to create well-structured and easily-maintainable style sheets.",
                "Written unit tests using Mocha, Chai, and Sinon with a high level of code coverage",
                "Worked with Highcharts.js, D3 JS Data Driven Documents to bind data to the DOM, also created an interactive visualization apis.",
                "Made use of Performance tuning tools like IE8, JS Profiler, Fiddler, Google Lighthouse and Debugging tools like ULS viewer."
            ],
            start: new Date(2016, 9, 0),
            end: new Date(2019, 8, 0),
            icon: faIndustry,
            displayDesc: true,
        },
        {
            name: 'Wipro Technologies',
            role: 'Sr Software Engineer',
            about: `Wipro Technologies, is a consulting and outsourcing business of Wipro Limited. 
            I have worked with VISA client as a UI-Developer with React.js, Redux, Express.js frameworks.`,
            desc: [
                "Performed SVN to Git migration including the implementation of Git Branching Workflow",
                "The ability to write clear, well-documented, well-commented and efficient code for web development.",
                "Developed device independent applications using Twitter Bootstrap.",
                "Responsibilities included analysis of the project goals, turning functional descriptions into technical requirements, as well as concept development of various reusable components.",
                "Was involved in the development and finalization of the initial design of the application and worked with content managers, copywriters and designers to resolve the issues.",
                "Wrote Bower, Grunt and Webpack scripts for processing and bundling front end resources.",
                "Handled Browser Compatibility issues in HTML, CSS, Bootstrap and JavaScript for IE, Firefox and Chrome."
            ],
            start: new Date(2015, 6, 0),
            end: new Date(2016, 9, 0),
            icon: faChessBoard,
            displayDesc: true,
        },
        {
            name: 'Davizta India PVT Ltd',
            role: 'Programmer Analyst',
            about: `daVIZta is a provider of Enterprise Revenue Analytics solutions and services to the life sciences industry. 
            I have worked as a UI-Developer with AngluarJS v1.6.`,
            desc: [
                "Migrated JAVA GWT (Google Web Toolkit) based application to Angular v1.6 based javascript application.",
                "Understanding remote procedure methods and converted into Angular v1.6 services.",
                "Involved in creating AngularJS Custom Directives in development of commonly used components across teams such as grid, pagination and conditional validations.",
                "Developed market share module as Single Page Application using Angular JS, Routers, Services, Filters, and Custom Directives.",
                "Developed page layouts, navigation, buttons and icons.",
            ],
            start: new Date(2013, 5, 0),
            end: new Date(2015, 1, 0),
            icon: faCodepen,
            displayDesc: true,
        },
        {
            name: 'Tripod software solutions private limited',
            role: 'Software Engineer',
            about: `Makes product development for clients with Tripod’s T3 Fixed Cost Pledge, means software solutions are delivered within budget, 
            on time and will produce the results of business needs. In my journey with Tripod, I have worked as PL/SQL, Java GWT and Javascript UI developer.`,
            desc: [
                "Worked with the application in MVC Architecture, integrated with Hibernate and Spring MVC.",
                "Maintained a proven track record in transforming Graphic Designer's static prototypes into hand-coded HTML, specifically adhering to W3C-established web standards achieved accuracy and efficiency on every web Browser.",
                "Developed the Reusable templates using HTML, CSS, JavaScript, jQuery, handlebars.",
                "Worked on CSS Background, CSS Positioning, CSS Text, CSS Border, CSS Margin, CSS Padding, CSS Table, Pseudo Classes, Pseudo Elements and CSS Behaviors in CSS.",
                "Worked on data migration i.e. from an Oracle database of LINUX environment to an MS SQL server using an ODBC driver."
            ],
            start: new Date(2008, 9, 0),
            end: new Date(2012, 12, 0),
            icon: faCodepen,
            displayDesc: true,
        }
    ]
}
export default config;