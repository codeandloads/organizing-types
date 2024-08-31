declare module "codeandload" {
  export interface User {
    id: number;
    name: string;
    email: string;
  }

  export type UserRole = "admin" | "user" | "guest";

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

  export interface Post {
    id: number;
    title: string;
    content: string;
    author: User;
  }
}
