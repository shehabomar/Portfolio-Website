
;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);

var divbg = document.createElement("div");
divbg.id = "loaderbg";
divbg.className = "";

var div = document.createElement("div");
div.id="preloader";
div.className="preloader";
div.innerHTML='<div class="loader"></div>';
document.body.insertBefore(divbg,document.body.firstChild);
divbg.appendChild(div);

window.onload=function() {
    setTimeout(() => {
        divbg.remove();
    }, 1000);
};

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;

    var stepTime = Math.abs(duration / range);
    var incrementsPerIteration = 1;
 
    if (stepTime < 4) {
      incrementsPerIteration = Math.ceil(4 / stepTime);
    }
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      for (var i = 0; i < incrementsPerIteration; i++) {
        current += increment;
        obj.innerHTML = "+" + current;
        if (current == end) {
          clearInterval(timer);
          break;
        }
      }
    }, stepTime);
}



  


