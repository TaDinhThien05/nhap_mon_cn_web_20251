// ===== CHỨC NĂNG TÌM KIẾM SẢN PHẨM =====

// Lấy các phần tử cần thiết cho tìm kiếm
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const productItems = document.querySelectorAll('.product-item');

// Hàm xử lý tìm kiếm
function searchProducts() {
    // Lấy từ khóa tìm kiếm và chuyển về chữ thường
    const keyword = searchInput.value.toLowerCase().trim();
    
    // Duyệt qua tất cả sản phẩm
    productItems.forEach(function(product) {
        // Lấy tên sản phẩm (phần tử h3 có class product-name)
        const productName = product.querySelector('.product-name');
        
        if (productName) {
            // Lấy text và chuyển về chữ thường
            const productNameText = productName.textContent.toLowerCase();
            
            // Kiểm tra xem tên sản phẩm có chứa từ khóa không
            if (productNameText.includes(keyword)) {
                // Hiển thị sản phẩm
                product.style.display = '';
            } else {
                // Ẩn sản phẩm
                product.style.display = 'none';
            }
        }
    });
}

// Gắn sự kiện click cho nút tìm kiếm
searchBtn.addEventListener('click', searchProducts);

// Gắn sự kiện keyup cho ô input (tìm kiếm khi gõ)
searchInput.addEventListener('keyup', function(event) {
    // Nếu nhấn Enter thì tìm kiếm
    if (event.key === 'Enter') {
        searchProducts();
    }
    // Tìm kiếm realtime khi gõ
    searchProducts();
});


// ===== CHỨC NĂNG THÊM SẢN PHẨM =====

// Lấy các phần tử cần thiết
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const productList = document.getElementById('product-list');

// Hàm toggle (ẩn/hiện) form thêm sản phẩm
function toggleAddProductForm() {
    // Sử dụng classList.toggle để thêm/xóa class "hidden"
    addProductForm.classList.toggle('hidden');
}

// Gắn sự kiện click cho nút "Thêm sản phẩm"
addProductBtn.addEventListener('click', toggleAddProductForm);

// Gắn sự kiện click cho nút "Hủy"
cancelBtn.addEventListener('click', function() {
    // Ẩn form
    addProductForm.classList.add('hidden');
    // Reset form
    addProductForm.reset();
});

// Xử lý submit form thêm sản phẩm
addProductForm.addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định (reload trang)
    event.preventDefault();
    
    // Lấy giá trị từ form
    const productName = document.getElementById('productName').value;
    const productDesc = document.getElementById('productDesc').value;
    const productPrice = document.getElementById('productPrice').value;
    
    // Tạo phần tử article mới cho sản phẩm
    const newProduct = document.createElement('article');
    newProduct.className = 'product-item';
    
    // Tạo nội dung HTML cho sản phẩm mới
    newProduct.innerHTML = `
        <h3 class="product-name">${productName}</h3>
        <p>${productDesc}</p>
        <p class="price">Giá: ${Number(productPrice).toLocaleString('vi-VN')} ₫</p>
    `;
    
    // Thêm sản phẩm mới vào danh sách
    productList.appendChild(newProduct);
    
    // Reset form
    addProductForm.reset();
    
    // Ẩn form
    addProductForm.classList.add('hidden');
    
    // Cập nhật lại danh sách sản phẩm để tìm kiếm hoạt động với sản phẩm mới
    // (Cần query lại vì có thêm phần tử mới)
    updateProductList();
    
    // Hiển thị thông báo (sáng tạo thêm)
    alert('Đã thêm sản phẩm thành công!');
});

// Hàm cập nhật lại danh sách sản phẩm
function updateProductList() {
    // Cập nhật lại NodeList productItems
    const updatedProductItems = document.querySelectorAll('.product-item');
    
    // Gắn lại sự kiện tìm kiếm cho các sản phẩm mới
    // (Trong trường hợp này, hàm searchProducts() đã dùng querySelectorAll
    // nên sẽ tự động lấy cả sản phẩm mới khi được gọi)
}