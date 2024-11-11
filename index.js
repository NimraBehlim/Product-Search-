// List of products with stock status
const products = [
    { name: "Blue Shirt", inStock: true },
    { name: "Black Shirt", inStock: false },
    { name: "White Shirt", inStock: true },
    { name: "Red Shirt", inStock: false }
];

// Grabbing necessary elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productContainer = document.getElementById('productContainer');

// Function to create a product button
const createProductButton = (product) => {
    const productButton = document.createElement('div');
    productButton.className = `product-button${product.inStock ? '' : ' out-of-stock'}`;
    productButton.textContent = `${product.name} - ${product.inStock ? 'In Stock' : 'Out of Stock'}`;
    return productButton;
};

// Display products based on search term
const displayProducts = (searchTerm) => {
    productContainer.innerHTML = '';

    // Filter products based on search term, ignoring case
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // Handle case where no products match
    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p>No products found.</p>';
    } else {
        filteredProducts.forEach((product) => {
            productContainer.appendChild(createProductButton(product));
        });
    }
};

// Event listener for search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) displayProducts(searchTerm);
});