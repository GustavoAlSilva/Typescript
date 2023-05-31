import readline from 'readline';
import { Product } from './Product';
import { Brand } from "./Brand";

function ask(question: string): Promise<any> {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve) => {

        rl.question(question, (response: string | number) => {

            rl.close();

            resolve(response);
        });
    });
}

async function main() {

    const brand = new Brand();

    const product = new Product();

    brand.name = await ask('Write the brand name: ');

    product.id = await ask('Write the product ID: ');
    product.name = await ask('Write the product name: ');
    product.description = await ask('Write the product description: ');
    product.price = await ask('Write the product price: ');
    product.brand = brand;

    console.log(`\nID: ${product.id}\nName: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}\nBrand: ${brand.name}`);
}

main();