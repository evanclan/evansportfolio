/* eslint-disable no-irregular-whitespace */
import EvanHero from "../assets/images/evanface2.png";
import ScratchBG from "../assets/images/scratchnew.png";
const Hero = () => {
  return (
    <div className="relative flex font-kanit bg-gradient-to-r xl:justify-between xl:min-w-[1280px] from-white to-red-200">
      <div className="flex flex-col pt-14 pl-10">
        <p>Hi my name is</p>
        <h1 className="text-[80px] md:text-[100px] xl:text-[120px] font-lobster text-gray-700 leading-none text-bold z-10">
          Evan Alferez
        </h1>

        <p className="text-bold pt-4 pl-8">アルフェレズ　エバン</p>

        <div className="flex pt-10 xl:text-5xl flex-col text-red-400 font-kanit justify-center drop-shadow-sm text-center text-3xl">
          <h2>Marketer</h2>
          <h2>Developer</h2>
          <h2>Creative</h2>
        </div>
        <div className="flex justify-center gap-3 max-sm:flex-col max-sm:gap-0">
          <button className=" relative py-1  px-4 z-10 bg-red-400 mt-10 rounded-2xl font-bold hover:bg-red-600  text-white shadow-xl">
            Download English Resume
          </button>
          <button className=" relative py-1  px-4 z-10 bg-red-400 mt-10 rounded-2xl font-bold hover:bg-red-600  text-white shadow-xl">
            Download Japanese Resume
          </button>
        </div>
      </div>
      <img
        className="relative z-10 pr-10 pt-8"
        width={400}
        src={EvanHero}
        alt="EvanHero"
      />
      <img
        className="absolute -z-3 right-0"
        src={ScratchBG}
        width={400}
        alt="scracth"
      />
    </div>
  );
};

export default Hero;
