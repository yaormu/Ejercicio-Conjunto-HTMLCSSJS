import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AccordionPSeInt = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "Desarrollo de Códigos en PSeInt",
    content: (
      <>
        <div className="accordion-items">
          <NavLink to="/variables" className="nav-link">
            Taller de PSeInt #1 Variables e Impresión
          </NavLink>
          <NavLink to="/condicionales" className="nav-link">
            Taller de PSeInt #2 Condicionales
          </NavLink>
          <NavLink to="/ciclos" className="nav-link">
            Taller de PSeInt #3 Ciclos
          </NavLink>
          <NavLink to="/arreglos" className="nav-link">
            Taller de PSeInt #4 Arreglos
          </NavLink>
          <NavLink to="/funciones" className="nav-link">
            Taller de PSeInt #5 Funciones
          </NavLink>
        </div>        
      </>
    ),
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <div
        className="accordion-main-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div>
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </div>
      </div>
      {isActive && <div className="accordion-main-content">{content}</div>}
    </React.Fragment>
  );
};
export default AccordionPSeInt;
