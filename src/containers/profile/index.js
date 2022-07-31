import React from 'react';
import { faBaseball } from '@fortawesome/free-solid-svg-icons';

import Config from '../../metadata/config'
import AboutMe from '../../components/banners/aboutMe';
import Heading from '../../components/banners/heading';
import ResumeHeader from '../../components/banners/resumeHeader';
import WorkSnap from '../../components/banners/workSnap';
import Typography from '../../components/banners/typography';
import ProfileFooter from '../../components/footer/profileFooter';
import ProfileNav from '../../components/navs/profileNav';
import Progress from '../../components/rating/progress';
import EducationSnap from '../../components/banners/educationSnap';
import HostelMate from '../../components/banners/hostelMate';

const Profile = () => {
    return (
        <div className="w-screen h-screen">
            <ProfileNav />
            <div className='flex flex-col justify-start items-start w-full bg-[#F2F2F2] border-t-gray-900 border-t-4' id="print_to_pdf">
                <div className='grid grid-rows-1 grid-cols-12'>
                    <div className='col-span-12 md:col-start-1 md:col-end-4 bg-[#F7F7F7]'>
                        <ResumeHeader />
                        <Typography type={"h4"} text={Config.quickMe} />
                        <div className='p-4'>
                            <Progress label={"Javascript"} type="[white]" rating={9} value={"8"} />
                            <Progress label={"React.js, Redux"} rating={10} value={7} />
                            <Progress label={"HTML5, CSS3"} rating={9} value={8} />
                            <Progress label={"Bootstrap, Material-UI, tailwindCSS"} type="warning" rating={9} value={8} />
                            <Progress label={"Node.js, Express.js"} type="primary" rating={5} value={6} />
                            <Progress label={"Next.js"} rating={8} value={3} />
                            <Progress label={"GraphQL"} type="info" rating={7} value={3} />
                            <Progress label={"Prisma (ORM)"} type="info" rating={6} value={2} />
                        </div>
                    </div>
                    <div className='col-span-12 md:col-start-4 md:col-end-13 bg-[#F2F2F2]'>
                        <div className='flex flex-col m-4'>
                            <AboutMe />
                            <Heading type={'h4'} title={"Work Experience"} icon={faBaseball} />
                            <WorkSnap />
                            <Heading type={'h4'} title={"Education"} icon={faBaseball} />
                            <EducationSnap />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4'>
                <Heading type={'h4'} title={"My Personal Projects"} icon={faBaseball} />
            </div>
            <div className='flex flex-col justify-start p-4'>
                <div className='m-4 p-4'>
                    <HostelMate />
                </div>
            </div>
            <ProfileFooter />
        </div>
    )
}

export default Profile;