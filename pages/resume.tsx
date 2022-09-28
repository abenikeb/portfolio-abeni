import { languages } from "../Data";
import Head from "next/head";
import { motion } from "framer-motion";
import { SpringFadeUp, FadeUpLeft } from "../motion";

const Resume = () => {
  return (
    <motion.div
      variants={SpringFadeUp}
      initial="initial"
      animate="animate"
      className="pt-6 py-10 px-1 md:px-10"
    >
      {/* Header  */}
      <Head>
        <title>Skill</title>
        <meta
          name="description"
          content="Abenzer skills and education level "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-color3 text-3xl fx font-semibold font-popi space-x-4 tracking-wider">
        <span className="text-2xl text-color1  font-mono font-normal mr-1 ">
          02.
        </span>{" "}
        Skills
        <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden w-[300px]" />
      </h1>
      <div className="md:pl-5 pt-6 md:pt-8 ">
        <h2 className="text-2xl font-semibold font-popi text-color2">
          Education
        </h2>
        <h3 className="text-base font-popi font-medium py-2 w-full md:w-[73%] text-color2">
          {" "}
          {`Experienced Software Developer with expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.`}
        </h3>
        <h1 className="text-base text-color2 font-popi font-normal py-4 ">
          Here are a few technologies I’ve been working with recently:
        </h1>
        <motion.div
          variants={FadeUpLeft}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 max-w-[400px] "
        >
          {languages.map(({ Icon, name, level }) => (
            <div
              key={name}
              className="fx select-none   duration-300  py-1 hover:font-semibold"
            >
              <Icon className="h-3 text-color1 " />
              <h1 className="text-sm font-mono text-color2 font-medium ">
                {name}
              </h1>
            </div>
          ))}
        </motion.div>
        <a
          href="/images/AbenezerKebede_Resume.pdf"
          className="btn btn-secondary px-4 py-2 btn-sm"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;
