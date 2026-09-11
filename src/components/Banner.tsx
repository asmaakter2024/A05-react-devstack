import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="mt-24  mb-28">
      <div className=" container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-6xl leading-15 tracking-[-1.5px] w-[555px]">
            Build Your Ideal Development Stack
          </h1>
          <p className="pt-6 pb-13 text-[18px] leading-[29.3px]">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-active btn-warning">Warning</button>
            <button className="btn btn-active">Default</button>
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
