import React from 'react';

import IntroBanner from '../../components/banners/intro';
import ProfileNav from '../../components/navs/profileNav';

const Profile = () => {
    return (
        <div class="w-screen h-screen">
            <ProfileNav />
            <IntroBanner />
        </div>
    )
}

export default Profile;