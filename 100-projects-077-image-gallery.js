'use gallery'

const modal = document.getElementById('modal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const galleryImages = document.querySelectorAll(".galleryImage");
const close = document.getElementsByClassName('close')[0];

galleryImages.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});