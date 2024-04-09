import Japan_Main from "../assets/images/Japan_Main.png";
import { flag } from "../constants";
const JapanDiary = () => {
  return (
    <div className="flex pt-4">
      <img
        className="tems-start w-1/2 h-1/2 max-w-[600px] xl:max-w-[300px] "
        src={Japan_Main}
        alt="japanmainpic"
        width={300}
      />
      <div className="m-10 flex flex-col font-semibold justify-between gap-10 items-center xl:flex-row xl:items-start">
        <div>
          <img
            className="xl:w-[600px] xl:h-[500]"
            src={flag[1].url}
            alt="philippine_flag"
            height={400}
          />
          <ul>
            <li>Associate in PC Operations NCII</li>
            <li>Bachelors of Science in Information Technology</li>
          </ul>
        </div>
        <div>
          <img
            className="border-2 xl:w-[500px] xl:h-[500]"
            src={flag[0].url}
            alt="japan_flag"
          />
          <ul>
            <li>Japanese Language and Culture (2yrs)</li>
            <li>JLPT N5, N4, N3</li>
            <li>JPT LVL 2</li>
            <li>Japan Drivers License</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JapanDiary;
