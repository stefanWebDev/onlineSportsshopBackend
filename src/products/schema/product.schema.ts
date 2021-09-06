import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

  @Prop()
  manufacturer: string;

  @Prop()
  title: string;

  @Prop()
  rating: number;
  
  @Prop()
  price: number;

  @Prop()
  bullet_points: string[];

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  category: string;


}

export const ProductSchema = SchemaFactory.createForClass(Product);