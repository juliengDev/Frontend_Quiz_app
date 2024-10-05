// const Icon = ({ name, ...props }) => {
//   return (
//     <svg {...props}>
//       <use href={`/src/assets/images/${name}.svg#icon`} />
//     </svg>
//   );
// };

// export default Icon;

const Icon = ({ name, alt, ...props }) => {
  return (
    <img src={`/src/assets/images/${name}.svg`} alt={alt || name} {...props} />
  );
};

export default Icon;
