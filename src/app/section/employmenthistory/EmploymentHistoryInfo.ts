export interface EmploymentHistoryInfo {
  id: number;
  company: {
    name: string;
    logo: string;
  };
  role: string;
  startDate: string;
  endDate?: string;
  responsibilities: Array<string>;
}
