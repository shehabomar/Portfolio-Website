
;(function($) {
  // Executes when the DOM is fully loaded
  $(document).ready( function() {
      
    // Event listener for click events on elements with the 'show-menu' class within '.header-area'
    $(document).on('click', '.header-area .show-menu', function() {
        
        // Toggles the 'active' class on both the clicked element and the '.navbar' within '.header-area'
        $(this).toggleClass('active');
        
        $(".header-area .navbar").toggleClass('active');
      
      });

    // Initialize the AOS (Animate On Scroll) library
    AOS.init({
      duration: 1500,
      once: true,
    })

  });

})(jQuery);

// Creates a new div element for the background of the preloader
var divbg = document.createElement("div");
divbg.id = "loaderbg";
divbg.className = "";


// Creates a new div element for the preloader itself
var div = document.createElement("div");
div.id="preloader";
div.className="preloader";
div.innerHTML='<div class="loader"></div>'; // Inner HTML for the preloader

// Inserts the preloader background as the first element in the body
document.body.insertBefore(divbg,document.body.firstChild);
// Appends the preloader to the preloader background
divbg.appendChild(div);

// Event that fires when all the page's resources have finished loading
window.onload=function() {
  // Sets a timeout to remove the preloader after 1 second
  setTimeout(() => {
      divbg.remove();
  }, 1000);
};

// Function to animate numerical values
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;

    // Calculates the time in milliseconds for each increment
    var stepTime = Math.abs(duration / range);
    var incrementsPerIteration = 1;
 
    // Adjusts the increments per iteration if the step time is too short
    if (stepTime < 4) {
      incrementsPerIteration = Math.ceil(4 / stepTime);
    }

    // Sets an interval to update the value
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      for (var i = 0; i < incrementsPerIteration; i++) {
        current += increment;

        // Adds a "+" symbol for certain IDs, otherwise appends a "%" symbol
        if(id == "years" || id == "clients" || id == "projects"){
          obj.innerHTML = "+" + current;
        }else{
          obj.innerHTML = current + "%";
        }
        
        // Stops the interval when the target value is reached
        if (current == end) {
          clearInterval(timer);
          break;
        }
      }
    }, stepTime);
}



  


