import Webgallery from "../components/Work/webgallery";
import Subwork from "./Subwork";

const page = () => {
  return (
    <div>
      <Webgallery title="Frontend Developer" description="Convert UI To Code"/>
      <Subwork title="Backend Engineer" description="Build Logic"/>
    </div>
  );
};

export default page;
