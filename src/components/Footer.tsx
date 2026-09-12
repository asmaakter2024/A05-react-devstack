import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div>
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-[105px] object-contain"
            />

            <p className="mt-4 max-w-[320px] text-[12px] leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 transition hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] text-slate-400 transition hover:text-slate-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[11px] text-slate-400 transition hover:text-slate-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
