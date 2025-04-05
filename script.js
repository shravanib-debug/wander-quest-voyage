
// Travel-themed icons for background
const travelIcons = [
  'plane', 'map-marked-alt', 'passport', 'suitcase', 
  'globe-americas', 'umbrella-beach', 'mountain', 
  'hotel', 'camera', 'anchor', 'bus', 'train',
  'ship', 'map', 'map-pin', 'route'
];

// Create animated travel-themed background
function createBackground() {
  const background = document.getElementById('background-animation');
  
  for (let i = 0; i < 20; i++) {
    const icon = document.createElement('i');
    icon.classList.add('travel-icon', 'fas', `fa-${travelIcons[Math.floor(Math.random() * travelIcons.length)]}`);
    
    // Random properties
    const size = Math.random() * 30 + 20;
    const posX = Math.random() * window.innerWidth;
    const delay = Math.random() * 15;
    const duration = Math.random() * 20 + 10;
    const rotation = Math.random() * 360;
    
    icon.style.fontSize = `${size}px`;
    icon.style.left = `${posX}px`;
    icon.style.top = `${window.innerHeight + 100}px`;
    icon.style.animationDelay = `${delay}s`;
    icon.style.animationDuration = `${duration}s`;
    icon.style.transform = `rotate(${rotation}deg)`;
    
    background.appendChild(icon);
  }
}

// Map animation and interaction
function initializeMap() {
  const mapPoints = document.querySelectorAll('.map-point');
  
  mapPoints.forEach(point => {
    point.addEventListener('mouseover', function() {
      // Show city name
      const cityName = this.getAttribute('data-city');
      
      // Create tooltip if doesn't exist
      let tooltip = document.querySelector('.map-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.classList.add('map-tooltip');
        document.querySelector('.map-card').appendChild(tooltip);
      }
      
      // Position and show tooltip
      const pointRect = this.getBoundingClientRect();
      const mapRect = document.querySelector('.map-card').getBoundingClientRect();
      
      tooltip.textContent = cityName;
      tooltip.style.left = `${pointRect.left - mapRect.left + 10}px`;
      tooltip.style.top = `${pointRect.top - mapRect.top - 30}px`;
      tooltip.style.opacity = '1';
    });
    
    point.addEventListener('mouseout', function() {
      const tooltip = document.querySelector('.map-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
      }
    });
  });
}

// Handle the search form submission
function initializeSearchForm() {
  const searchForm = document.getElementById('search-form');
  
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const travelers = document.getElementById('travelers').value;
    
    // In a real app, you would process this data and redirect
    console.log('Search for:', { destination, dates, travelers });
    
    // For demo purposes, show an alert
    alert(`Searching for trips to ${destination || 'anywhere'} for ${travelers} traveler(s) ${dates ? `on ${dates}` : ''}`);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Add Font Awesome for the icons
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);
  
  // Initialize features
  createBackground();
  initializeMap();
  initializeSearchForm();
  
  // Add hover effect to destination cards for smoother animations
  const destinationCards = document.querySelectorAll('.destination-card');
  destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
