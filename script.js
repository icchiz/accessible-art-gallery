
function updateImage(previewPic) {
    const display = document.getElementById("image-display");
    display.style.backgroundImage = `url('${previewPic.src}')`;
    display.innerText = previewPic.alt;
    console.log("Event triggered: Xem ảnh - " + previewPic.alt);
}


function unUpdate() {
    const display = document.getElementById("image-display");
    display.style.backgroundImage = "url('')";
    display.innerText = "Rê chuột hoặc dùng phím Tab để chọn một chú chó bên dưới.";
}


function addTabFocus() {
    console.log("Trang web đã load xong! Đang tự động gán tabindex...");


    const images = document.querySelectorAll(".preview");


    for (let i = 0; i < images.length; i++) {
   
        images[i].setAttribute("tabindex", "0");

     
        images[i].addEventListener("mouseover", function() {
            updateImage(this);
        });
        images[i].addEventListener("mouseleave", function() {
            unUpdate();
        });

       
        images[i].addEventListener("focus", function() {
            updateImage(this);
        });
        images[i].addEventListener("blur", function() {
            unUpdate();
        });
    }
}

// Bước 8: Đăng ký hàm addTabFocus chạy khi trang web tải xong (onload)
window.onload = addTabFocus;
