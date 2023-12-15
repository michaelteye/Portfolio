import React from 'react'
import Blog from '../service/Blog'
import profile from "../../../public/met.png";
import Service from '../service/service';
import Profile from './Profile';


const UserInfo = () => {
  return (
    <div>
        {/* <div className="grid grid-cols-1 md:flex w-full"> */}
        {/* <Blog
        title="Blog Page"
        description="Info"
        imageUrl={profile}
        />*/}
        <Service
        title="SPECIALIZATION"
        description="Service Offering"
        imageUrl={profile}

        />
        {/* <Profile
        title="User Profile"
        description="Credentials"
        imageUrl={profile}
        /> */}
      {/* </div> */}
    </div>
  )
}

export default UserInfo