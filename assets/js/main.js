// Main JavaScript for Arkanza Aqiqah Invitation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        once: true,
        offset: 100,
        duration: 1000,
        easing: 'ease-out-cubic'
    });
    
    // Get guest name from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    
    if (guestName) {
        // Decode and format guest name
        const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
        document.getElementById('guest-name').textContent = decodedName;
    }
    
    // Open invitation functionality
    const openBtn = document.getElementById('open-invitation');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');
    const musicPlayer = document.getElementById('music-player');
    const backgroundMusic = document.getElementById('background-music');
    
    openBtn.addEventListener('click', function() {
        // Hide overlay with fade effect
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.8s ease';
        
        setTimeout(function() {
            overlay.style.display = 'none';
            mainContent.classList.remove('hidden');
            musicPlayer.classList.remove('hidden');
            
            // Try to autoplay music (browser may block)
            playMusic();
            
            // Refresh AOS for new elements
            AOS.refresh();
        }, 800);
    });
    
    // Music Player Controls
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    let isPlaying = false;
    
    function playMusic() {
        backgroundMusic.play().then(function() {
            isPlaying = true;
            musicIcon.classList.remove('ph-speaker-slash', 'ph-speaker-high');
            musicIcon.classList.add('ph-speaker-high');
            musicToggle.classList.add('animate-pulse');
        }).catch(function(error) {
            // Autoplay blocked, show muted icon
            isPlaying = false;
            musicIcon.classList.remove('ph-speaker-high');
            musicIcon.classList.add('ph-speaker-slash');
        });
    }
    
    function pauseMusic() {
        backgroundMusic.pause();
        isPlaying = false;
        musicIcon.classList.remove('ph-speaker-high');
        musicIcon.classList.add('ph-speaker-slash');
        musicToggle.classList.remove('animate-pulse');
    }
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    // Countdown Timer
    const eventDate = new Date('2026-04-26T08:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            // Event has started
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Copy link to clipboard
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        // Show success message
        showNotification('Link berhasil disalin!');
    }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Link berhasil disalin!');
    });
}

// Add to Calendar
function addToCalendar() {
    const event = {
        title: 'Aqiqah & Tasmiyah - Muhammad Arkanza Devandra',
        date: '20260426',
        time: '0800',
        location: 'https://maps.app.goo.gl/NxmkrpZRKu6Wc1PPA',
        description: 'Acara Aqiqah dan Tasmiyah Muhammad Arkanza Devandra'
    };
    
    // Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date}T${event.time}00/${event.date}T120000&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
}

// Notification helper
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-sage-500 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(function() {
        notification.remove();
    }, 3000);
}