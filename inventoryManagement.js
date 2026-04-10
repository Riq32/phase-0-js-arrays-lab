//Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];
 
// Access Product Information - log the first product
function logFirstProduct() {
  console.log(products[0]);
}
 
// Add a Product to the end of the array
function addProduct(productName) {
  products.push(productName);
}
 
// Update Product Information at a given index
function updateProductName(index, newName) {
  products[index] = newName;
}
 
//Remove the last product from the array
function removeLastProduct() {
  products.pop();
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
