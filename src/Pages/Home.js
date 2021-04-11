import React from "react";

// Components
import LeftSidebar from "../Components/LeftSidebar";
import Feed from "../Components/Feed";
import RightSidebar from "../Components/RightSidebar";

// React Icons
// import { GrDeliver } from "react-icons/gr";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
      {/* <div className="bottom">
        <Tagline icon={<GrDeliver style={{color:"#fff !important"}} />} text="Fast delivery" />
        <Tagline icon={<GrDeliver />} text="Fast delivery" />
        <Tagline icon={<GrDeliver />} text="Fast delivery" />
      </div> */}
    </div>
  );
}

// function Tagline({ text, icon }) {
//   return (
//     <div className="tagline">
//       <div>{icon}</div>
//       <div>{text}</div>
//     </div>
//   );
// }

export default Home;
