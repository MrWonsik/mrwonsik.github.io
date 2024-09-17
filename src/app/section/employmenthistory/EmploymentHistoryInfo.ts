export interface EmploymentHistoryInfo {
  id: number;
  company: {
    name: string;
    logo: string;
  };
  role: string;
  startDate: string;
  startYear: string;
  endDate?: string;
  endYear?: string;
  responsibilities: Array<string>;
}
