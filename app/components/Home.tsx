import profile1 from "../../public/michaelss.png";
import { AboutCard, PersonalCard } from "./Card";
import Achievement from "./user/achievement";
import UserInfo from "./user/userInfo";
const HomePage = () => {
  return (
    <div className="md:mt-10">
      <div className="grid grid-cols-1 md:flex">
        <PersonalCard
          title="Software Engineer"
          description="I am a Software Engineer base in Ghana"
          imageUrl={profile1}
          Firstname="Michael"
          Lastname="Teye"
        />

        <AboutCard
          title="more about me"
          description="Credentials"
          imageUrl={profile1}
        />
      </div>

      <UserInfo/>
      <Achievement
      title="Let's"
      description="Work"
      />
      
    </div>
  );
};
export default HomePage;
