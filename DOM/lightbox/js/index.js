var thumbnail = document.createElement('img');
thumbnail.src = ('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

var thumbnail2 = document.createElement('img');
thumbnail2.src = ('https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

var thumbnail3 = document.createElement('img');
thumbnail3.src = ('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

thumbnail.style.width = '100px';
thumbnail2.style.width = '100px';
thumbnail3.style.width = '100px';

function openLightbox() {
    document.querySelector('.overlay').style.display = "flex"
}

function openLightbox2() {
    document.querySelector('.overlay').style.display = "flex"
}

function openLightbox3() {
    document.querySelector('.overlay').style.display = "flex"
}

thumbnail.addEventListener('click', openLightbox)
thumbnail2.addEventListener('click', openLightbox2)
thumbnail3.addEventListener('click', openLightbox3)


document.body.appendChild(thumbnail)
document.body.appendChild(thumbnail2)
document.body.appendChild(thumbnail3)

function closeOverlay() {
    document.querySelector('.overlay').style.display = "none"