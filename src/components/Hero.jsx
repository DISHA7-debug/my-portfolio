import { motion } from "framer-motion";
import { styles } from "../styles";
import { hero } from "../constants";
import devGirl from "../assets/hero_girl.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {hero.tagline}
          </p>
        </div>
      </div>
      <img
        src={devGirl}
        alt="female developer"
        className="absolute bottom-10 sm:bottom-0 md:bottom-[-20px] lg:bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[360px] md:w-[460px] lg:w-[500px] h-auto object-contain pointer-events-none drop-shadow-2xl rounded-xl"
      />




    </section>
  );
};

export default Hero;
