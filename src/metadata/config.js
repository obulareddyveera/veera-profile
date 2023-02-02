import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faChessBoard, faCodeFork, faIndustry, faMoneyCheck, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const config = {
    introduction: [
        `Innovative optimized solution seeker. Technically, a highly motivated JavaScript Full Stack developer has 8+ years of experience as a Senior Software Engineer 
        with a demonstrated history of working in the industrial and fintech industries. Skilled in Node.js, Next.js, Express.js, GraphQL, Prisma (ORM), React.js, 
        Redux, HTML, CSS3, Bootstrap v3-4, Material-UI, and tailwindCSS.`,
    ],
    quickMe: `Skilled and motivated Javascript Full-Stack developer with 8+ years of experience.`,
    location: 'Bangalore',
    address: 'B-405, Signature Classic Apartment, Sompura Village, Ambalipura-Sarjapura Road, Bangalore',
    workExp: [
        {
            name: 'Tata Consultancy Services',
            role: 'Technical Lead',
            desc: `Tata Consultancy Services is an Indian multinational information technology services and consulting company, I am working for a Envestnet client, with the tech stack of Next.js, React.js, Redux, SASS, and HTML5.`,
            start: new Date(2022, 10, 16),
            end: null,
            icon: faNetworkWired,
        },
        {
            name: 'Yodlee Infotech Private Limited',
            role: 'Member Of Technical Staff',
            desc: `Envestnet | Yodlee, provides an industry leading data aggregation and data analytics platform. I am working for a core Engineering team, with the tech stack of Next.js, React.js, Redux, SASS, and HTML5.`,
            start: new Date(2020, 4, 0),
            end: new Date(2022, 10, 14),
            icon: faMoneyCheck,
        },
        {
            name: 'GE Digital',
            role: 'Sr Software Engineer',
            desc: `GE Digital is a subsidiary of the General Electric, builds various Industrial software solutions. 
            I have worked with "Asset Performance Management (APM)" solution as a UI-Developer with React.js, Redux, Hightcharts visualization frameworks.`,
            start: new Date(2016, 9, 0),
            end: new Date(2019, 8, 0),
            icon: faIndustry,
        },
        {
            name: 'Wipro Technologies',
            role: 'Sr Software Engineer',
            desc: `Wipro Technologies, is a consulting and outsourcing business of Wipro Limited. 
            I have worked with VISA client as a UI-Developer with React.js, Redux, Express.js frameworks.`,
            start: new Date(2015, 6, 0),
            end: new Date(2016, 9, 0),
            icon: faChessBoard,
        },
        {
            name: 'Davizta India PVT Ltd',
            role: 'Programmer Analyst',
            desc: `daVIZta is a provider of Enterprise Revenue Analytics solutions and services to the life sciences industry. 
            I have worked as a UI-Developer with AngluarJS v1.6.`,
            start: new Date(2013, 5, 0),
            end: new Date(2015, 1, 0),
            icon: faCodepen,
        }
    ]
}
export default config;