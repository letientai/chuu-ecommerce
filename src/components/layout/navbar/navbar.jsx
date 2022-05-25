import React, { useCallback, useEffect, useState, useRef } from "react";
import "../layout.scss";
import { Header1, Header2, Header3 } from "./header";
export const Navbar = (prop) => {
  const elementNav = useRef();
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        elementNav.current.style.top = "0px";
      } else if (y < window.scrollY && window.scrollY > 100) {
        elementNav.current.style.top = "-112px";
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const sentSearch = (data) => {
    prop.sentDataSearch(data);
  };
  return (
    <div className="c-header j-c-header1" ref={elementNav}>
      <div className="headerNavbar">
        <Header1 />
        <Header2 />
        <Header3 sentSearch={sentSearch} />
      </div>
    </div>
  );
};
