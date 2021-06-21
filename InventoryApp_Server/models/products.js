import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: {
        type: String
    },
    productQty: {
        type: String
    },
    productPrice: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    category: {
        type: String
    },
    inStock: {
        type: Boolean
    },
    imageFile: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product; 