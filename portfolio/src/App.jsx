import React, { useState, useEffect } from "react";
import { Background } from "../pages/Background";
import { Sidebar } from "../pages/Sidebar";
import { Topbar } from "../pages/Topbar";
import { Footer } from "../pages/Footer";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Experience } from "../pages/Experience";
import debounce from "lodash.debounce";

export default function App() {
  const [preLoader, setPreLoader] = useState(true);
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 786);
  const [sideBar, setSideBar] = useState(false);
  const [button, setButton] = useState(!largeScreen);
  const [isTopbarVisible, setIsTopbarVisible] = useState(false);

  const handleResize = debounce(() => {
    setLargeScreen(window.innerWidth > 786);
  }, 250);

  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setIsTopbarVisible(true);
    const timer = setTimeout(() => {
      if (window.innerWidth > 786) {
        setSideBar(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (largeScreen) {
      setSideBar(true);
      setButton(false);
    } else {
      setSideBar(false);
      setButton(true);
    }
  }, [largeScreen]);

  const handleSidebarClick = () => {
    if (!largeScreen) {
      setSideBar(false);
      setButton(true);
    }
  };

  if (preLoader) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#1A202C]">
        <div className="w-16 h-16  bg-[#38A169] rounded-full animate-ping"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen bg-[#1A202C]">
      <div
        className={`fixed left-0 top-0 h-full bg-[#1A202C] transform transition-transform duration-300 ease-in-out
          w-22 select-none cursor-default sm:w-3/12 md:w-2/12 xl:w-[12%] z-20
          ${sideBar ? "translate-x-0" : "-translate-x-full"}`}
        onClick={handleSidebarClick}
      >
        <Sidebar />
      </div>

      <div className={`flex-1 transition-all duration-300 ${sideBar ? "ml-12 sm:ml-[25%] md:ml-[16.67%] xl:ml-[12%]" : ""}`}>
        <Background>
          <div
            id="contact"
            className={`transition-transform duration-500 select-none cursor-default
              ${isTopbarVisible ? "translate-y-0" : "-translate-y-full"}`}
          >
            <Topbar>
              {button && (
                <div
                  onClick={() => {
                    setSideBar(!sideBar);
                    setButton(!button);
                  }}
                  className="w-12 h-12 bg-[#1A202C] rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg border-2 border-[#1A202C] hover:border-[#00B8A9] hover:border-3 hover:shadow-sm hover:h-[45px] hover:w-[75px] hover:scale-105"
                >
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </Topbar>
          </div>

          <div className="w-full overflow-x-hidden">
            <div className="flex flex-wrap justify-between">
              <div id="about" className="w-full md:max-w-3xl mt-6 flex justify-end ml-auto mr-6">
                <About />
              </div>

              <div id="projects" className="w-full md:max-w-3xl mt-6 flex justify-start ml-7">
                <Projects />
              </div>

              <div id="experience" className="w-full md:max-w-3xl mt-6 flex justify-end ml-auto mr-6">
                <Experience />
              </div>
            </div>

            <div id="footer" className="mt-6 w-full">
              <Footer />
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
};

