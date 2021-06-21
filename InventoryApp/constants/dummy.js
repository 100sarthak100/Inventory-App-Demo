export const inventoryPortfolio = {
    totalInventoryValue: "12,724.33",
    totalProducts: "243",
};

export const inventoryStats = [
    {
        id: 1,
        category: "Groceries",
        image: require("../assets/images/grocery.png"),
        totalProducts: "20",
        totalAmount: "2,500"
    },
    {
        id: 2,
        category: "Dairy",
        image: require("../assets/images/dairy.png"),
        totalProducts: "15",
        totalAmount: "1,750"
    },
    {
        id: 3,
        category: "Organics",
        image: require("../assets/images/grocery.png"),
        totalProducts: "12",
        totalAmount: "750"
    },
    {
        id: 4,
        category: "Furnitures",
        image: require("../assets/images/dairy.png"),
        totalProducts: "5",
        totalAmount: "10,000"
    }
]

export const inventoryTransactions = [
    {
        id: 1,
        description: "Sold Bananas",
        amount: -2,
        category: "Groceries",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought Milk",
        amount: 2,
        category: "Dairy",
        type: "B",      // S - Sold, B - Bought
        date: "14:20 13 Apr"
    },
    {
        id: 3,
        description: "Sold Table",
        amount: -1,
        category: "Furnitures",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 14 Apr"
    },
]

export const products = [
    {
        id: 1,
        productName: "Chair",
        productQty: 6,
        productPrice: 240,
        category: "Furniture",
        productImg: 'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        productName: "Table",
        productQty: 10,
        productPrice: 1000,
        category: "Furniture",
        productImg: 'https://images.unsplash.com/photo-1548855601-988fdac64d66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
    },
    {
        id: 3,
        productName: "Laptop",
        productQty: 10,
        productPrice: 1000,
        category: "Electronics",
        productImg: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        id: 4,
        productName: "Strawberries",
        productQty: 12,
        productPrice: 20,
        category: "Fruits & Vegetables",
        productImg: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 5,
        productName: "Bananna",
        productQty: 6,
        productPrice: 24,
        category: "Fruits & Vegetables",
        productImg: 'https://images.unsplash.com/photo-1543218024-57a70143c369?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
    },
    {
        id: 6,
        productName: "Milk",
        productQty: 6,
        productPrice: 24,
        category: "  ",
        productImg: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80'
    }
]


const dummyData = { inventoryPortfolio, inventoryStats, products, inventoryTransactions };

export default dummyData;