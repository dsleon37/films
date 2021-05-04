import { Categoria } from "./categoria";

export class Pelicula {
  
    id: number = 0;
    title: string = '';
    description: string = '';
    date: Date;
    imageUrl: string = '';
    videoUrl: string = '';
    category_id: number = 0;
}
