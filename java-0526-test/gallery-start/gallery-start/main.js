const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = ['Thumbnail 1', 'Thumbnail 2', 'Thumbnail 3', 'Thumbnail 4', 'Thumbnail 5'];

/* Declaring the alternative text for each image file */

/* Looping through images */
function createthumbBar(){
    for (let i=0;i<pictures.length;i++){
const newImage = document.createElement('img');

newImage.setAttribute('src',`images/${pictures[i]}` );
 newImage.setAttribute('alt', altTexts[i]);
newImage.addEventListener('click',function(){
    const src=this.getAttribute('src');
            displayedImage.setAttribute('src', src);
        });
thumbBar.appendChild(newImage);
    }
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    let newclass = btn.getAttribute('class');

    if (newclass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken'; 
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
    }
});
window.onload = function() {
    createthumbBar();
};