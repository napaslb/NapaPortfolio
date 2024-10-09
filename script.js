const menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelector('.nav-link');

   menuIcon.onclick = ()=>{
   navLink.classList.toggle('active');
}




// เลือกองค์ประกอบของป๊อปอัป
const popup = document.querySelector('.popup-image');
const popupImage = document.querySelector('.popup-image img');
const closeBtn = document.querySelector('.popup-image span');

// เลือกภาพทั้งหมดใน .image-container
const images = document.querySelectorAll('.image-container .image img');

// เพิ่ม event listener ให้ภาพทั้งหมดเพื่อแสดงป๊อปอัปเมื่อคลิก
images.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.src; // กำหนดภาพให้กับป๊อปอัป
        popup.style.display = 'block'; // แสดงป๊อปอัป
    });
});

// เพิ่ม event listener ให้ปุ่มปิดเพื่อซ่อนป๊อปอัปเมื่อคลิก
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // ซ่อนป๊อปอัป
});
