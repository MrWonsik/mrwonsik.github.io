export interface Theme {
  name: "Dark" | "Light",
  mainColor: string;
  textColor: string;
  accentColor: string;
  showFilterDropShadow: boolean;
}

export const darkTheme: Theme = {
  name: "Dark",
  mainColor: "#121212",
  textColor: "#f1f5f9",
  accentColor: "#d946ef",
  showFilterDropShadow: true,
};

export const lightTheme: Theme = {
  name: "Light",
  mainColor: "#fcfdff",
  textColor: "#000b2a",
  accentColor: "#0082af",
  showFilterDropShadow: false
};