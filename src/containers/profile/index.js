import React from 'react';

import GithubBanner from '../../components/banners/github';
import IntroBanner from '../../components/banners/intro';
import ProfileFooter from '../../components/footer/profileFooter';
import ProfileNav from '../../components/navs/profileNav';

const Profile = () => {
    return (
        <div className="w-screen h-screen">
            <ProfileNav />
            <IntroBanner />
            <GithubBanner />
            <ProfileFooter />
        </div>
    )
}

export default Profile;