export interface CourseInfo {
  id: string;
  course: {
    name?: string;
    logoSrc?: string;
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
  dateOfCompletion: string;
}
