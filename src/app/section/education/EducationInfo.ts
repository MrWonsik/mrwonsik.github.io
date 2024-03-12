export interface EducationInfo {
  id: string;
  university: {
    name?: string;
    logoSrc: string;
  };
  title: string;
  startDate: string;
  endDate: string;
  descriptionComponent: JSX.Element;
}
