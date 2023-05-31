import { Brand } from "./Brand";

export class Product {

    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public brand!: Brand;
}