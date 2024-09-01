export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

export type UserRole = "admin" | "user" | "guest";

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
}

export interface CATEGORY {
  id: string;
  title: string;
}

export interface LOCATION {
  id: number;
  state: string;
  city: string;
  suburb: string;
  street: string;
  country: string;
  PostCode: string;
}

export interface AUTHOR {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl?: string;
}

export enum TYPES {
  "FullTime" = 1,
  "PartTime" = 2,
  "Casual" = 3,
  "Contract" = 4,
  "SubContract" = 5,
}
