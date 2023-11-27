// Dữ liệu sản phẩm mẫu
var products = [
    { id: 1, name: "Sản phẩm 1", price: 10 },
    { id: 2, name: "Sản phẩm 2", price: 20 },
    { id: 3, name: "Sản phẩm 3", price: 30 }
];

// Đối tượng giỏ hàng
var cart = [];

// Lấy danh sách sản phẩm và hiển thị trên trang
function displayProducts() {
    var cartItems = document.getElementById("cart-items");

    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td><input type="number" min="0" value="0" id="quantity-${product.id}"></td>
            <td><button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button></td>
        `;

        cartItems.appendChild(row);
    }
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    var quantityInput = document.getElementById("quantity-" + productId);
    var quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        var product = products.find(p => p.id === productId);
        var cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        };

        cart.push(cartItem);
    }

    quantityInput.value = 0;
}

// Hiển thị giỏ hàng
function displayCart() {
    var cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i];

        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${cartItem.name}</td>
            <td>${cartItem.quantity}</td>
            <td><button onclick="removeFromCart(${cartItem.id})">Xóa</button></td>
        `;

        cartItems.appendChild(row);
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    var index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    displayCart();
}

// Xử lý sự kiện khi nhấn nút thanCánh toán
document.getElementById("checkout-button").addEventListener("click", function() {
    // Thực hiện xử lý thanh toán ở đây
    console.log("Đã thanh toán");
});

// Hiển thị sản phẩm và giỏ hàng ban đầu
displayProducts();
displayCart();






// Lấy biểu tượng giỏ hàng và số lượng
var cartIcon = document.getElementById("cart-icon");
var cartCount = document.getElementById("cart-count");

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    // ...
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    // ...
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    var totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalCount.toString();
}

// Hiển thị sản phẩm và giỏ hàng ban đầu
displayProducts();
displayCart();
updateCartCount();