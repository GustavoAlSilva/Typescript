import readline from 'readline';
import { Product } from './Product';
import { Brand } from './Brand';

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

    brand.setName(await ask('Write the brand name: '));

    product.setId(await ask('Write the product ID: '));
    product.setName(await ask('Write the product name: '));
    product.setDescription(await ask('Write the product description: '));
    product.setPrice(await ask('Write the product price: '));
    product.setBrand(brand);

    console.log(`\nID: ${product.getId()}\nName: ${product.getName()}\nDescription: ${product.getDescription()}\nPrice: ${product.getPrice()}\nBrand: ${brand.getName()}`);
}

main();