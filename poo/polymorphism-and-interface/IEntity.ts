export interface IEntity {

    setName(name: string): void;
    getName(): string;
    setIdDocument(idDocument: string): void;
    getIdDocument(): string;
    idDocumentValidate(idDocument: string): boolean;
}

/*
    A interface é normalmente utilizada quando as classes que a extenderão possuem a mesma assinatura de método, mas que terão implementações diferentes.
    No caso desse projeto, a classe "IndividualEntity" possui CPF, e portanto, devemos validar se a string tem 11 caracteres. Já a classe
    "LegalEntity" possui CNPJ, e portanto, devemos validar se a string tem 14 caracteres 
*/