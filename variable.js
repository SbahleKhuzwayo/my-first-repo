document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.nav-links a, .logo a');
    
   
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            e.preventDefault();
          
            const targetId = this.getAttribute('href');
            
            
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } 
           
            else if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
           
            else {
                window.location.href = targetId;
            }
        });
    });

  
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') == `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});  
document.addEventListener('DOMContentLoaded', function() {


    const video = document.querySelector('.video');
  
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });


    

  });
