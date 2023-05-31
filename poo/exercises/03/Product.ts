import { Brand } from "./Brand";

export class Product {

    private id!: number;
    private name!: string;
    private description!: string;
    private price!: number;
    private brand!: Brand;

    public getId(): number {
        
        return this.id;
    }

    public setId(id: number): void {

        this.id = id;
    }

    public getName(): string {
        
        return this.name;
    }

    public setName(name: string): void {

        this.name = name;
    }

    public getDescription(): string {
        
        return this.description;
    }

    public setDescription(description: string): void {

        this.description = description;
    }

    public getPrice(): number {
        
        return this.price;
    }

    public setPrice(price: number): void {

        this.price = price;
    }

    public getBrand(): Brand {
        
        return this.brand;
    }

    public setBrand(brand: Brand): void {

        this.brand = brand;
    }
}