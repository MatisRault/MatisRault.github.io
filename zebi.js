document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("retourHaut");
  
    if (scrollToTopButton) {
      scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  
    var scrollToAboutButton = document.querySelector("a[href='#section2']");
    if (scrollToAboutButton) {
      scrollToAboutButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    var imageButton = document.getElementById("imageButton");
    if (imageButton) {
      imageButton.addEventListener("click", function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  
    window.addEventListener("scroll", function() {
      var scrollToTopButton = document.getElementById("retourHaut");
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  });
  