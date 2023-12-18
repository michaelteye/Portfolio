import profile from "../../../public/met.png";
import WorkTogether from './work';
import { motion } from "framer-motion";

const OtherInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
       
        
        <WorkTogether
        title="Let's"
        description="work"
        imageUrl={profile}
        />
        
      
    </motion.div>
  )
}

export default OtherInfo;