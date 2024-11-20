interface Products {
    Name: string;
    Price: number;
    description: string;
    Stock?: boolean; // Optional
}

const product: Products = {
    Name: "Laptop",
    Price: 1500,
    description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
    Stock: true, // Optional
};
function displayProductDetails(product: Products): void {
    const stockStatus = product.Stock ? "In Stock" : "Out of Stock";
    const productDetails = `
        Product Name: ${product.Name}
        Price: $${product.Price}
        Description: ${product.description}
        Stock Status: ${stockStatus}
    `;
    console.log(productDetails);
}

type Role = "Admin" | "User" | "Editor" | "Moderator";

interface Benutzer {
    username: string;
    email: string;
    password: string;
    role: Role; 
    isActive: boolean; 
}

const user: Benutzer = {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securepassword123",
    role: "Admin", 
    isActive: true
};

console.log(user);
