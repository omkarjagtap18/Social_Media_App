import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //temp dummy data
  const stories = [
    {
      id: 1,
      name: "User name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAFpCfrE8PpNvAit-WW42rqRrxPHWUFH0rtZmX1dxOkvmX5sZGYT9mUeQ4GDVQPcShes&usqp=CAU",
    },
    {
      id: 2,
      name: "User name",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "User name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiPj-8foAraCJD-wBHWtXx_qZbcpJx-qiCA&usqp=CAU",
    },
    {
      id: 4,
      name: "User name",
      img: "https://images.pexels.com/photos/3228736/pexels-photo-3228736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
