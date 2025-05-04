const images = [
    "../public/img/hero-img/hero-img.jpg",
    "../public/img/hero-img/hero_t4.jpg",
    "../public/img/hero-img/hero-img3.jpg",
    "../public/img/hero-img/hero_t2.jpg",
    "../public/img/hero-img/hero_t3.jpg"
];

let currentIndex = 0;
const heroImage = document.getElementById("hero-image");
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        heroImage.src = images[currentIndex];
        heroImage.style.opacity = 1; // Fade in
    }, 1000);
}

setInterval(changeImage, 5000); // Change image every 5 seconds

// sermon
function openVideo(url) {
    document.getElementById('videoModal').style.display = 'flex';
    document.getElementById('videoFrame').src = url;
  }
  
  function closeVideo() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoFrame').src = '';
  }

const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
});

document.getElementById("prayerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("prayerName").value.trim();
    const request = document.getElementById("prayerText").value.trim();
  
    if (!name || !request) {
      alert("Please provide your name and prayer request.");
      return;
    }
  
    // Clear the form and show message
    this.reset();
    const msg = document.getElementById("prayerConfirmation");
    msg.style.display = "block";
  
    setTimeout(() => {
      msg.style.display = "none";
    }, 5000);
  });
  