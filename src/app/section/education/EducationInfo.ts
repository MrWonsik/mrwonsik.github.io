export interface EducationInfo {
  id: string;
  university: {
    name?: string;
    logoSrc: string;
  };
  title: string;
  startDate: string;
  startYear: string;
  endDate: string;
  endYear: string;
}
