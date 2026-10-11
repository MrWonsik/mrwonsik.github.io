export interface CourseInfo {
  id: string;
  course: {
    name?: string;
    logoSrc?: string;
    logoWhiteSrc?: string;
    logoWhite?: boolean;
    url?: string;
  };
  author?: {
    name?: string;
    logoSrc?: string;
  };
  platform?: {
    name?: string;
    logoSrc?: string;
  };
  completionDate?: {
    month: string,
    year: string,
  }
}
