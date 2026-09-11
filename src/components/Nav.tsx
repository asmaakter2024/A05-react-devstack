import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <>
      <nav className=" m-7.5">
        <div className="container mx-auto flex justify-between">
          <img src={Logo} alt="" />

          <ul className="flex gap-7.25 items-center">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-5">
            <button>Sign in</button>
            <button className="btn btn-secondary rounded-[9999px]">Sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
