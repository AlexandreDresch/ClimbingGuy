export interface Post {
  id: number;
  title: string;
  slides: Slide[];
  description: string;
  height: string;
  content: string[];
}

export interface Slide {
  url: string;
  title: string;
}
