
  var slideIndex = 0;
  showSlides();

  function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
       


       const cacheKey = "NUMBER";
       if (typeof(Storage) !== "undefined") {
 
           // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
           if (sessionStorage.getItem(cacheKey) === "undefined") {
               // Jika belum maka akan atur dengan nilai awal yakni 0
               sessionStorage.setItem(cacheKey, 0);
           }
      
           const button = document.querySelector("#plus");
           const button2 = document.querySelector("#minus");
           const count = document.querySelector("#view");
           button.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number++;
               sessionStorage.setItem(cacheKey, number);
               count.innerText = sessionStorage.getItem(cacheKey);
              
           });

           button2.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number--;
               sessionStorage.setItem(cacheKey, number);
               count.innerText = sessionStorage.getItem(cacheKey);
              
           });
       } else {
           alert("Browser tidak mendukung Web Storage")
       }

       let order = document.querySelector("plus")