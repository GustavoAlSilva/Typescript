export abstract class Test {

    private question01!: string;
    private question02!: string;
    private question03!: string;
    private question04!: string;
    private question05!: string;

    public getQuestion01(): string {

        return this.question01;
    }

    public setQuestion01(question01: string): void {

        this.question01 = question01;
    }

    public getQuestion02(): string {

        return this.question02;
    }

    public setQuestion02(question02: string): void {

        this.question02 = question02;
    }

    public getQuestion03(): string {

        return this.question03;
    }

    public setQuestion03(question03: string): void {

        this.question03 = question03;
    }

    public getQuestion04(): string {

        return this.question04;
    }

    public setQuestion04(question04: string): void {

        this.question04 = question04;
    }

    public getQuestion05(): string {

        return this.question05;
    }

    public setQuestion05(question05: string): void {

        this.question05 = question05;
    }
}