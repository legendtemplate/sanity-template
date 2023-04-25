// add to cart
export interface Product {
    id: number;
    name: string;
    price: number;
    imagePath: string;
  }
  
  export interface CartItem {
    product: Product;
    qty: number;
  }


  import { PortableTextBlock } from "sanity"




  export type Project = {
    _id: string;
    createdAt: Date;
    name: string;
    description: string;
    slug: string;
    image: string;
    imageAtt: string;
    imageCap: string;
  }