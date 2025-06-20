// src/index.js or main entry point

import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// ✅ Initialize scroll animations
initScrollReveal(targetElements, defaultProps);

// ✅ Initialize tilt effect for project cards/images
initTiltEffect();

// ✅ Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      // Optional: Change icon
      toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? '☀️'
        : '🌙';
    });
  }
});
const tiltElement = document.querySelector('.hero-tilt');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30; // Max tilt: 15deg
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  tiltElement.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});

// Optional: Reset on mouse leave
document.addEventListener('mouseleave', () => {
  tiltElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

