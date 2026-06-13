/* Hàm xử lý khi di chuột VÀO ảnh nhỏ:
- Lấy thông tin alt và src của ảnh nhỏ đang hover
- Thay đổi hình nền và chữ của ô hiển thị lớn (#image) tương ứng
*/
function upDate(previewPic) {
    // 1. Kiểm tra sự kiện kích hoạt trên console
    console.log("upDate function triggered!");
    
    // 2. Log thông tin alt và src để debug
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);
    
    // Lấy phần tử khung hiển thị lớn
    const mainImageDiv = document.getElementById("image");
    
    // 3. Thay đổi text thành nội dung của thuộc tính 'alt'
    mainImageDiv.innerHTML = previewPic.alt;
    
    // 4. Thay đổi background-image thành 'src' của ảnh nhỏ đang hover
    mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Thêm class bổ trợ của CSS để chữ chuyển sang màu trắng cho dễ nhìn trên nền ảnh
    mainImageDiv.classList.add("has-image");
}

/* Hàm xử lý khi RỜI chuột khỏi ảnh nhỏ:
- Trả ảnh nền và chữ của ô lớn về trạng thái mặc định ban đầu
*/
function undo() {
    console.log("undo function triggered!");
    
    const mainImageDiv = document.getElementById("image");
    
    // 1. Reset background-image về trạng thái trống ban đầu
    mainImageDiv.style.backgroundImage = "url('')";
    
    // 2. Reset nội dung text về chuỗi thông báo ban đầu
    mainImageDiv.innerHTML = "Hover over an image below to display here.";
    
    // Xóa class bổ trợ màu chữ đi
    mainImageDiv.classList.remove("has-image");
}
