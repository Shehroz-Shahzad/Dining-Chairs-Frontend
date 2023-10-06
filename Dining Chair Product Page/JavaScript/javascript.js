/*=====================================================================================================================*/
/*================================================   Quantity Button   ================================================*/
/*=====================================================================================================================*/

function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }

/*=====================================================================================================================*/
/*================================================   Discription Div   ================================================*/
/*=====================================================================================================================*/


function changeContent(newHeading, newDescription) {
  // Update the heading and description based on the button clicked
  document.getElementById('dynamic-heading').textContent = newHeading;
  document.getElementById('dynamic-description').textContent = newDescription;
  
  const buttons = document.querySelectorAll('.change-color');
  buttons.forEach(button => {
      button.style.backgroundColor = '#FFFFFF'; // Reset to the initial color
  });
  // Change the background color of the clicked button
  event.target.style.backgroundColor = '#E9F2F9'; // Change to the desired color

}

// To view The Answer

function toggleAnswer(answerId, iconId) {
  var answerElement = document.getElementById(answerId);
  var iconElement = document.getElementById(iconId);
  if (answerElement.style.display === 'block' || answerElement.style.display === '') {
      answerElement.style.display = 'none';
      iconElement.setAttribute('d', 'M12.5 0.5893557C10.0277 0.5893557 7.61099 1.32247 5.55538 2.69599C3.49976 4.0695 1.89761 6.02174 0.951511 8.30581C0.00541604 10.5899 -0.242126 13.1032 0.24019 15.528C0.722505 17.9527 1.91301 20.18 3.66117 21.9282C5.40933 23.6763 7.63661 24.8669 10.0614 25.3492C12.4861 25.8315 14.9995 25.5839 17.2835 24.6378C19.5676 23.6918 21.5199 22.0896 22.8934 20.034C24.2669 17.9784 25 15.5616 25 13.0894C25 11.4478 24.6767 9.82238 24.0485 8.30581C23.4203 6.78924 22.4996 5.41125 21.3388 4.25052C20.1781 3.08979 18.8001 2.16905 17.2835 1.54086C15.767 0.912678 14.1415 0.5893557 12.5 0.5893557Z');
  } else {
      answerElement.style.display = 'block';
      iconElement.setAttribute('d', 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z');
  }
}


// ============================= To scroll cards with JavaScript ============================= //

// JavaScript to handle scrolling
const productContainer = document.querySelector('#to-move');
const scrollLeft = document.querySelector('#scrollLeft');
const scrollRight = document.querySelector('#scrollRight');

scrollLeft.addEventListener('click', () => {
    productContainer.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth',
    });
});

scrollRight.addEventListener('click', () => {
    productContainer.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth',
    });
});

// ============================= Product Images ============================= //


document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image containers and scroll container
  const productImage = document.querySelector(".productImage div img");
  const productAllImages = document.querySelector(".productAllImages");
  const productAllImagesDivs = document.querySelectorAll(".productAllImages div img");

  // Add click event listeners to the images in productAllImages
  productAllImagesDivs.forEach(function (image, index) {
      image.addEventListener("click", function () {
          // Remove the "selected" class from all images
          productAllImagesDivs.forEach(function (img) {
              img.parentElement.classList.remove("selected");
          });

          // Update the main productImage with the clicked image's source
          productImage.src = image.src;

          // Add the "selected" class to the clicked image's parent div
          image.parentElement.classList.add("selected");

          // Scroll the container to the position of the selected image
          productAllImages.scrollTo({
              left: image.parentElement.offsetLeft - (productAllImages.clientWidth - image.parentElement.clientWidth) / 2,
              behavior: 'smooth' // You can change this to 'auto' if you don't want smooth scrolling
          });
      });
  });
});

const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const productImage = document.querySelector('.productImage');
const productAllImages = document.querySelectorAll('.productAllImages div');
let currentIndex = 0;

function updateImage(index) {
  currentIndex = index;
  productAllImages.forEach((thumbnail, i) => thumbnail.classList.toggle('selected', i === currentIndex));
  productImage.scrollTo(currentIndex * productImage.clientWidth, 0);
}

prevButton.addEventListener('click', () => updateImage(Math.max(0, currentIndex - 1)));
nextButton.addEventListener('click', () => updateImage(Math.min(productAllImages.length - 1, currentIndex + 1)));
productAllImages.forEach((thumbnail, index) => thumbnail.addEventListener('click', () => updateImage(index)));