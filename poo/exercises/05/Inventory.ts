import { Piece } from "./Piece";

export class Inventory {

    private pieceList: Piece[] = [];

    public registerPiece(piece: Piece): void {

        this.pieceList.push(piece);
    }

    public removePiece(piecePosition: number): void {

        if(this.parseEmpty()) {

            console.log('List empty.');
        } else {

            this.pieceList.splice(piecePosition);
        }
    }

    public showPieces(): void {

        if(this.parseEmpty()) {

            console.log('\nList empty.');
        } else {

            for(let i = 0; i < this.pieceList.length; i++) {
                let piece = this.pieceList[i];
    
                console.log(`\n${i+1}ª piece:\nDescription: ${piece.getDescription()}\nColor: ${piece.getColor()}\nPrice: R$${piece.getPrice()}` +
                `\nHeight: ${piece.getHeight()}\nWidth: ${piece.getWidth()}`);
            }
        }
    }

    public parseEmpty(): boolean {

        return this.pieceList.length === 0;
    }
}