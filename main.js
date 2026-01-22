function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

function main() {
  const products = [
    new Product(1, "Laptop", 1200, 5, "Electronics", true),
    new Product(2, "Mouse", 25, 0, "Accessories", true),
    new Product(3, "Keyboard", 45, 10, "Accessories", true),
    new Product(4, "Headphones", 60, 3, "Accessories", false),
    new Product(5, "Monitor", 300, 2, "Electronics", true)
  ];

  // Câu 3
  console.log("Name - Price:");
  console.log(products.map(p => ({ name: p.name, price: p.price })));

  // Câu 4
  console.log("Còn hàng:");
  console.log(products.filter(p => p.quantity > 0));

  // Câu 5
  console.log("Có sản phẩm > 30:", products.some(p => p.price > 30));

  // Câu 6
  const accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
  console.log("Accessories đang bán:", accessoriesAvailable);

  // Câu 7
  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity, 0
  );
  console.log("Tổng giá trị kho:", totalValue);

  // Câu 8
  console.log("Danh sách sản phẩm:");
  for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
  }

   // Câu 9
  for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
  }

  
  // Câu 10
  const sellingInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
  console.log("Đang bán & còn hàng:", sellingInStock);
}

main();
