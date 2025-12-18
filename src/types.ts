export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
  uploadedBy: User;
  genre: string;
  coverImage: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;
}
