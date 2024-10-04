import React from "react";

const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/src/assets/images/${name}.svg#icon`} />
    </svg>
  );
};

export default Icon;
