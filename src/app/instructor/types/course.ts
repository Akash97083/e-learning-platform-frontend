export interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  created_at: Date;
  instructor: {
    name: string;
    image: string;
  }
}
