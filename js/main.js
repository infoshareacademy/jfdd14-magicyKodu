(function() {

    const sectionsEl = document.querySelectorAll("section");
    const sections = {};
    
    sectionsEl.forEach(function(element) {
      sections[element.id] = element.offsetTop;
    });
  
    window.addEventListener("scroll", function() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollPosition)
      for (let i in sections) {
        if (sections[i] <= scrollPosition+100) {
          document.querySelector('.active').classList.remove('active');
          document.querySelector('nav a[href*=' + i + ']').classList.add('active');
        }
      }
    });
  })();
