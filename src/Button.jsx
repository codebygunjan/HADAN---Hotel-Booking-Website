import React from "react";

function Button({ children, varient = "primary" }) {
  const styles = {
    primary: "bg-primary text-white hover:bg-accent",
    secondary: "bg-secodary text-text hover:bg-accent",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <>
      <button
        className={`${styles[varient]} rounded-lg px-6 py-3 transition-colors duration-300 active:scale-95 m-3`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
