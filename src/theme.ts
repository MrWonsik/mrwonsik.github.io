export interface Theme {
  mainColor: string;
  textColor: string;
  accentColor: string;
}

export const darkTheme: Theme = {
  mainColor: "#121212",
  textColor: "#f1f5f9",
  accentColor: "#d946ef",
};

export const lightTheme: Theme = {
  mainColor: "#fcfdff",
  textColor: "#000b2a",
  accentColor: "#0082af",
};