export interface PostProjectArgs {
  name: string;
  dueAt: string;
  description: string;
  priority: string;
  createdBy: string;
}

export interface UpdateProjectArgs extends PostProjectArgs {
  id: string;
}

export interface CompleteProjectArgs {
  id: string;
  is_complete: boolean;
}

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
