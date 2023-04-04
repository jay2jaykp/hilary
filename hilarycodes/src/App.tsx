import { useEffect, useState } from "react";
import { Wrapper } from "./components/Wrapper";

const App = () => {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  }, [loading]);

  return (
    <div className={` ${dark ? "dark" : ""}`}>
      <div className="bg-beige dark:bg-black dark:text-white ">
        {showContent ? (
          <Wrapper showContent={showContent} setDark={setDark} dark={dark} />
        ) : (
          <div
            className={`flex h-screen w-screen items-center justify-center  ease-in-out duration-500 transition-all ${
              loading ? "" : "opacity-0"
            }`}
          >
            <p className="text-2xl">
              Hilary Yates <span className="text-gray-300">Portfolio</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
