import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WebTech from "./components/WebTech";
import JapanDiary from "./components/JapanDiary";

function App() {
  return (
    <div className="relative flex flex-col justify-center items-center border-10 ">
      <header className="sm:max-w-640">
        <Navbar />
      </header>
      <section className="max-w-[1280px]">
        <Hero />
      </section>
      <section className="relative xl:min-w-[1280px]">
        <WebTech />
      </section>
      <section className="relative max-w-[1280px]">
        <JapanDiary />
      </section>
      <footer>Footer</footer>
    </div>
  );
}
export default App;
