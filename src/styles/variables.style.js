export const redRegular = "#ff635b";
export const redLight = "#ff9c96";
export const redDark = "#ff2c1f";
export const blackRegular = "#333";
export const blackLight = "#bcbac1";
export const whiteRegular = "#fff";

export const headingStyle = `
font-size: 3rem;
font-weight: 700;
color: #747475;
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
border: 2px solid ${redRegular};
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: ${whiteRegular};
color: ${redRegular};
&:hover {
  border-color: ${redRegular};
  background-color: ${redLight};
  color: ${redRegular};
}
`;

export const buttonDark = `
border: 2px solid ${redRegular};
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: ${redRegular};
color: ${whiteRegular};
&:hover {
  border-color: ${redRegular};
  background-color: ${redLight};
  color: ${redRegular};
}
`;