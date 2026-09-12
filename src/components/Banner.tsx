import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="mt-24  mb-28">
      <div className=" container mx-auto flex justify-between items-center">
        <div className=" w-[555px]">
          <h1>
            <span className="text-6xl font-bold text-[#0F172A]">
              Build Your Ideal
            </span>
            <br />
            <span className="text-6xl font-bold bg-[linear-gradient(90deg,_#FF5722_0%,_#D81B7E_50%,_#7C3AED_100%)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="pt-6 pb-13 text-[18px] leading-[29.3px]">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="flex gap-2">
            <button className=" btn rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899]">
              Explore Technologies
            </button>
            <button className="btn btn-active rounded-lg">Default</button>
          </div>
        </div>

        <div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
