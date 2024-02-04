// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// Function to update date and time
function updateDateTime() {
    var now = new Date();
    var formattedDateTime = now.toLocaleString();
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Initial call to set date and time when the page loads
updateDateTime();

// Set interval to update date and time every second (adjust as needed)
setInterval(updateDateTime, 1000);




document.addEventListener("DOMContentLoaded", function() {
  // Play the video
  var video = document.getElementById("intro-video");
  video.play();

  // Hide the video after 2 seconds
  setTimeout(function() {
      var videoContainer = document.getElementById("video-container");
      videoContainer.style.display = "none";
  }, 2000);
});






