export type CareerMockResponse = {
  id: string;
  careerQuarter: string;
  careerInfo: string[];
  mainProject: string[];
};

export type ProjectListResponse = {
  id: string;
  name: string;
  date: string;
  skill: string[];
  description: string;
  video?: string;
};

export type ProjectMockResponse = {
  id: string;
  quarter: string;
  projectList: ProjectListResponse[];
};

export type ProjectModalProps = {
  openProjectModalQuarter: string;
  onCloseProjectModal: () => void;
};

export type quarterProjectListType = {
  data: ProjectMockResponse[];
};

export type quarter = "" | "2022 q3" | "2022 q4";
