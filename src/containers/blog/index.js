import React from 'react';
import ProxySupportAdSense from '../../components/adSense/proxySupport';
import BlogCard from '../../components/banners/blogCard';
import IntroBanner from '../../components/banners/intro';
import ProfileFooter from '../../components/footer/profileFooter';
import ProfileNav from '../../components/navs/profileNav';

const Blog = ({data}) => {
    return (
        <>
            <ProfileNav />
            <IntroBanner />
            <div className='p-4 grid grid-cols-1 grid-rows-1 gap-3 md:grid-cols-4 bg-[#F7F7F7]'>
                {
                    data && data.items.map((entity, index) => {
                        return (
                            <BlogCard {...entity} key={`blogEntity_${index}`} />
                        )
                    })
                }
            </div>
            <div className='m-2 p-2'>
            <ProxySupportAdSense />
            </div>
            <ProfileFooter />
        </>
    )
}

export default Blog;