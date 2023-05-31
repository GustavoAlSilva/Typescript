import { IEntity } from "./IEntity";

export class LegalEntity implements IEntity {

    private name!: string;
    private idDocument!: string;

    public setName(name: string): void {

        this.name = name;
    }

    public getName(): string {

        return this.name;
    }

    public setIdDocument(idDocument: string): void {

        this.idDocument = idDocument;
    }

    public getIdDocument(): string {

        return this.idDocument;
    }

    public idDocumentValidate(idDocument: string): boolean {

        idDocument = idDocument.replace(/[-.]/g, "");

        return idDocument.length === 14;
    }
}