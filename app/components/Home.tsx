import profile from "../../public/met.png";
import { AboutCard, PersonalCard } from "./Card";
import Achievement from "./user/achievement";
import UserInfo from "./user/userInfo";
const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:flex">
        <PersonalCard
          title="Software Engineer"
          description="I am a Software Engineer base in Ghana"
          imageUrl={profile}
          Firstname="Michael"
          Lastname="Teye"
        />

        <AboutCard
          title="more about me"
          description="Credentials"
          imageUrl={profile}
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
