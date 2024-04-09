import { webTechPic } from "../constants";

const WebTech = () => {
  return (
    <div className="flex justify-around gap-6 pt-2 w-full">
      {webTechPic.map((tech) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={tech.name}
          >
            <img src={tech.url} alt={tech.name} className="w-20 h-20" />
            <p>{tech.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WebTech;
