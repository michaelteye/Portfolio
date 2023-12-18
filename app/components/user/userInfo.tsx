"use client"
import { motion } from 'framer-motion';
import profile from "../../../public/met.png";
import Service from '../service/service';


const UserInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
        {/* <div className="grid grid-cols-1 md:flex w-full"> */}
        {/* <Blog
        title="Blog Page"
        description="Info"
        imageUrl={profile}
        />*/}
        <Service
        title="SPECIALIZATION"
        description="Service Offering"
        imageUrl={profile}/>
        {/* <Profile
        title="User Profile"
        description="Credentials"
        imageUrl={profile}
        /> */}
      {/* </div> */}
    </motion.div>
  )
}

export default UserInfo