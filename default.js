import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"

const DefaultData = async() => {
    try {
        for (const product of products) {
            const existingProduct = await Product.findOne({ id: product.id });
            if (!existingProduct) {
                await new Product(product).save();
            }
        }
        console.log('Default data imported successfully') 
    } catch (error) {
        console.log('Error while inserting default data', error.message)
    }
}

export default DefaultData;