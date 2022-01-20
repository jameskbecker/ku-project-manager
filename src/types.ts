export type Project = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  priority: number;
  createdAt: number;
  completedAt: number | null;
  memberGroupId: string;
};

export type Assignment = {
  id: string;
  name: string;
  dueDate: number;
};

export type Comment = {
  id: string;
  details: string;
  senderId: string;
  receiverId: string;
  sendTime: number;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  courseId: string;
};

export type Task = {
  id: string;
  name: string;
  assignmentId: string;
};
