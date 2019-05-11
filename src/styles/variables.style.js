export const aquaRegular = "#2fefbc";
export const redLight = "#ff9c96";
export const redDark = "#ff2c1f";
export const blackRegular = "#333";
export const blackLight = "#bcbac1";
export const whiteRegular = "#fff";
export const aquaDark = "#25b28c";

export const headingStyle = `
font-size: 3rem;
font-weight: 700;
color: white;
text-transform: uppercase;
text-shadow: rgba(0, 0, 0, 0.56) 0px 13px 7px;
@media (max-width: 885px) {
  font-size: 4rem;
}
@media (max-width: 711px) {
  font-size: 3rem;
}
`;

export const buttonLight = `
border: 2px solid #3D1219;
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: ${whiteRegular};
color: #3D1219;
&:hover {
  border-color: #3D1219;
  background-color: #747475;
  color: #3D1219;
}
`;

export const buttonDark = `
border: 2px solid #3D1219;
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: #3D1219;
color: ${whiteRegular};
&:hover {
  border-color: #3D1219;
  background-color: #747475;
  color: #3D1219;
}
`;