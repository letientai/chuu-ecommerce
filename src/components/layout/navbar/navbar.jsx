import React, { useCallback, useEffect, useState, useRef } from "react";
import { Login } from "../../login/login";
import { Register } from "../../register/register";
import "../layout.scss";
import { Header1, Header2, Header3 } from "./header";
export const Navbar = (prop) => {
  const [checkLogin, setCheckLogin] = useState(false);
  const [checkRegister, setCheckRegister] = useState(false);

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

  const openFormLogin = (check) => {
    if (check) {
      setCheckLogin(true);
    }
  };

  const closeForm = () => {
    setCheckLogin(false);
    setCheckRegister(false);
  };

  const openFormRegister = (check) => {
    if (check) {
      setCheckRegister(true);
    }
  };

  const openRe = () => {
    setCheckLogin(false);
    setCheckRegister(true);
  };
  const openLo = () => {
    setCheckRegister(false);
    setCheckLogin(true);
  };

  return (
    <div className="c-header j-c-header1" ref={elementNav}>
      {checkLogin && (
        <div className="formLogin bg-w w-100 h-100">
          <Login closeForm={closeForm} openRe={openRe} />
        </div>
      )}
      {checkRegister && (
        <div className="formLogin bg-w w-100 h-100">
          <Register closeForm={closeForm} openLo={openLo} />
        </div>
      )}
     

      <div className="headerNavbar">
        <Header1
          openFormLogin={openFormLogin}
          openFormRegister={openFormRegister}
        />
        <Header2 />
        <Header3 sentSearch={sentSearch} />
      </div>
    </div>
  );
};
