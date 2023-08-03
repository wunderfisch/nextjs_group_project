import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      updateScrollProgress();
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="w-1 h-full bg-blue-300 absolute top-0 right-0">
      <div
        className="w-full h-full bg-red-500"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
