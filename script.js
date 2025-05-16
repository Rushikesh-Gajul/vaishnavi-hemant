document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Hero Slider Animation
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(n) {
    gsap.to(slides[currentSlide], {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(3px)',
      duration: 0.8,
      onComplete: () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        gsap.to(slides[currentSlide], {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
        });
      },
    });
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  setInterval(() => showSlide(currentSlide + 1), 5000);

  // Initial Slide Animation
  gsap.from(slides[0].querySelector('.slide-content'), {
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power2.inOut',
  });

  // Countdown Timer with Flip Animation
  const weddingDate = new Date('May 22, 2025 20:30:00').getTime(); // Updated to future date
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    animateNumber(daysEl, days);
    animateNumber(hoursEl, hours);
    animateNumber(minutesEl, minutes);
    animateNumber(secondsEl, seconds);

    if (distance < 0) {
      clearInterval(countdownInterval);
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
    }
  }

  function animateNumber(element, value) {
    if (element.textContent !== value.toString().padStart(2, '0')) {
      gsap.to(element, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          element.textContent = value.toString().padStart(2, '0');
          gsap.fromTo(
            element,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: 'power2.inOut' }
          );
        },
      });
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Smooth Scroll for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      gsap.to(window, {
        scrollTo: target,
        duration: 1,
        ease: 'power2.inOut',
      });
    });
  });

  // ScrollTrigger Animations
  // Invitation Section
  gsap.from('.invitation', {
    scrollTrigger: {
      trigger: '.invitation',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power2.inOut',
  });

  // Couple Profiles
  gsap.from('.profile', {
    scrollTrigger: {
      trigger: '.couple-profiles',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    stagger: 0.3,
    duration: 0.8,
    ease: 'power2.inOut',
  });

  // Timeline Items
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    x: (index) => (index % 2 === 0 ? -100 : 100),
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: 'power2.inOut',
  });

  // Venue Card
  gsap.from('.venue-card', {
    scrollTrigger: {
      trigger: '.venue-details',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power2.inOut',
  });

  // Gallery Items
  gsap.from('.gallery-item', {
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.inOut',
  });

  // Countdown Section
  gsap.from('.countdown-item', {
    scrollTrigger: {
      trigger: '.countdown-section',
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.inOut',
  });
});