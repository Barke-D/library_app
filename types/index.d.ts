declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  bio: string;
};

declare type UpdateUserParams = {
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  bio: string;
};
