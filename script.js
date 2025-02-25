document.querySelectorAll(".hover-video").forEach((video) => {
  // Mouse hover events
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
  });

  // Touch events for mobile/touch devices
  video.addEventListener("touchstart", () => {
    video.play();
  });

  video.addEventListener("touchend", () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
  });

  // Click event to toggle fullscreen mode
  video.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      // If not in fullscreen, request fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        // IE/Edge
        video.msRequestFullscreen();
      }
    } else {
      // If already in fullscreen, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
  });
});
