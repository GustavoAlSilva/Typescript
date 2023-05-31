export class Piece {

    private description!: string;
    private price!: number;
    private color!: string;
    private height!: number;
    private width!: number;

    public setDescription(description: string): void {

        this.description = description;
    }

    public getDescription(): string {

        return this.description;
    }

    public setPrice(price: number): void {

        this.price = price;
    }

    public getPrice(): number {

        return this.price;
    }

    public setColor(color: string): void {

        this.color = color;
    }

    public getColor(): string {

        return this.color;
    }

    public setHeight(height: number): void {

        this.height = height;
    }

    public getHeight(): number {

        return this.height;
    }

    public setWidth(width: number): void {

        this.width = width;
    }

    public getWidth(): number {

        return this.width;
    }
}