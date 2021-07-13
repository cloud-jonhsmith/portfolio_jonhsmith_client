import React from "react";

import MenuNav from "../MenuNav/MenuNav";
import Social from "../Social/Social";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div>
        <h3>Jonhsmith Germán Córdova Zúñiga</h3>
        <p>
          Hola, bienvenido a mi sitio web personal, aquí podrás conocer un poco
          más sobre mi y los proyectos que he realizado, espero que lo
          disfrutes.
        </p>
      </div>

      <Social />

      <MenuNav />
    </>
  );
};

export default Sidebar;
