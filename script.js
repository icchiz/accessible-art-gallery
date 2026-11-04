
function updateImage(previewPic) {
    const imgHolder = document.getElementById("image-holder");
    const imgCaption = document.getElementById("image-caption");

   
    imgHolder.style.backgroundImage = `url('${previewPic.src}')`;
    
    
    imgCaption.innerText = previewPic.alt;

    console.log("Event triggered: Đã chọn ảnh - " + previewPic.alt);
}


function unUpdate() {
    const imgHolder = document.getElementById("image-holder");
    const imgCaption = document.getElementById("image-caption");

    imgHolder.style.backgroundImage = "url('')";
    imgCaption.innerText = "Rê chuột hoặc dùng phím Tab để chọn một chú chó bên dưới.";
}


function addTabFocus() {
    console.log("Trang web tải thành công! Đang khởi tạo các thuộc tính accessibility...");

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

// Chạy hàm khi trang web hoàn tất việc load (onload)
window.onload = addTabFocus;
