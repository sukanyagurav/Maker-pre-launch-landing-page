import scrollIcon from "/images/icon-scroll.svg";
const Hero = () => {
  return (
    <div className="flex items-center flex-col md:flex-row gap-8 my-8">
      <picture className="flex-[0.3]">
        <source
          media="(min-width:900px)"
          srcset="/images/illustration-hero-left.svg"
        ></source>
        <img
          src="/images/illustration-hero-mobile.png"
          alt=""
          className="w-full h-full"
        />
      </picture>
      <div className="flex-[0.4] flex flex-col items-center gap-4 text-center p-4 bg-style relative self-end">
        <h1 className="text-4xl text-white">
          Get paid for the work you{" "}
          <span className="text-[#3EEAE7]">love </span> to do.
        </h1>
        <p className="text-gray-500 my-8">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you're looking to escape the rat race or set up a
          side hustle, we've got you covered.
        </p>
        <a href="#features" className="animate-bounce transition-all duration-200 hover:animate-none hover:drop-shadow-2xl">
          <span className="sr-only"> scroll to feature section</span>
          <img src={scrollIcon} alt="" className="w-16 h-16 object-contain" />
        </a>
      </div>
      <picture className="flex-[0.3]">
        <source
          media="(min-width:900px)"
          srcset="/images/illustration-hero-right.svg"
        ></source>
        <img
          src="/images/illustration-hero-mobile.png"
          alt=""
          className="hidden md:block w-full h-full"
        />
      </picture>
    </div>
  );
};

export default Hero;
