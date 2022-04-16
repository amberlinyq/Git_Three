export const getButtonColor = (buttonType) => {
  switch (buttonType) {
    case "primary":
      return "#e09419";
    case "secondary":
      return "#e6b15c";
    case "invisible":
      return "transparent";
    default:
      return "white";
  }
};

export const getButtonSize = (buttonSize) => {
  switch (buttonSize) {
    case "small":
      return "0px";
    case "large":
      return "20px";
    default:
      return "10px";
  }
};
export const getButtonBorder = (buttonType) => {
  switch (buttonType) {
    case "invisible":
      return "none";
    default:
      return "solid 1px darkgray";
  }
};
