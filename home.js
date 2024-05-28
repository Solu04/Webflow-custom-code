<script>
// Copy Email from btn click
document.getElementById("copyEmail").addEventListener("click", function() {
  var email = "solutioresource15@gmail.com";
  
  // Create a temporary textarea element
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = email;

  // Append the textarea to the document body
  document.body.appendChild(tempTextarea);

  // Select the content of the textarea
  tempTextarea.select();

  // Use the Clipboard API to copy the selected text
  navigator.clipboard.writeText(email)
      .then(function() {
          console.log("Email address copied to clipboard:", email);
      })
      .catch(function(err) {
          console.error("Failed to copy email address:", err);
      })
      .finally(function() {
          // Remove the temporary textarea
          document.body.removeChild(tempTextarea);
      });
});

// Get all elements with class "get-radio-btn-field"
const radioBtnFields = document.querySelectorAll(".get-radio-btn-field");

// Loop through each "get-radio-btn-field" element
radioBtnFields.forEach((field) => {
  // Get the label and button elements within this field
  const label = field.querySelector(".get-radio-btn-label");
  const button = field.querySelector(".get-radio-btn");

  // Add click event listener to the label
  label.addEventListener("click", () => {
    // Remove "is-active" class from all buttons
    radioBtnFields.forEach((f) => {
      f.querySelector(".get-radio-button").classList.remove("is-active");
    });

    // Add "is-active" class to the clicked button
    button.classList.add("is-active");
  });
});

//Get started function
const openGetStarted = document.getElementById("open-get-started");
const openGetStartedTwo = document.getElementById("open-get-started-two");
const openGetStartedThree = document.getElementById("open-get-started-three");
const openGetStartedFour = document.getElementById("open-get-started-four");
const getStartedWrapper = document.querySelector(".get-started-wrapper");
const getStartedFormWrapper = document.querySelector(".get-started-main-form-wrapper");

// Function to hide the "web-wrapper" element
function hideWebWrapper() {
  const webWrapper = document.querySelector(".web-wrapper");
  if (webWrapper) {
    webWrapper.style.display = "none";
  }
}

// Function to show the "get-started-wrapper" element
function showGetStartedWrapper() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will create a smooth scroll effect
    });

  // Change display and transform properties
  getStartedWrapper.style.transition = 'transform 0.5s linear';
  getStartedWrapper.style.transform = "translateX(0vw)";
  getStartedWrapper.style.display = "block";
  getStartedFormWrapper.style.display = "block";
}

// Add click event listeners to all elements
openGetStarted.addEventListener("click", () => {
  hideWebWrapper(); // Call hideWebWrapper to hide "web-wrapper" if needed
  showGetStartedWrapper();
});
openGetStartedTwo.addEventListener("click", () => {
  hideWebWrapper();
  showGetStartedWrapper();
});
openGetStartedThree.addEventListener("click", () => {
  hideWebWrapper();
  showGetStartedWrapper();
});
openGetStartedFour.addEventListener("click", () => {
  hideWebWrapper();
  showGetStartedWrapper();
});


// Slider Function
function initializeSlider(
  leftArrowId,
  rightArrowId,
  projectWrapperSelector,
  projectItemSelector
) {
  const leftArrow = document.getElementById(leftArrowId);
  const rightArrow = document.getElementById(rightArrowId);
  const projectWrapper = document.querySelector(projectWrapperSelector);
  const slides = document.querySelectorAll(
    `${projectWrapperSelector} ${projectItemSelector}`
  );
  let slideIndex = 0;

  leftArrow.classList.add("inactive");

  leftArrow.addEventListener("click", prevSlide);
  rightArrow.addEventListener("click", nextSlide);

  function prevSlide() {
    if (slideIndex > 0) {
      slideIndex--;
      const translateDistance = getTranslateDistance();
      projectWrapper.style.transform = `translate3d(${translateDistance}px, 0, 0)`;
      leftArrow.classList.toggle("inactive", slideIndex === 0);
      rightArrow.classList.remove("inactive");
    }
  }

  function nextSlide() {
    if (slideIndex >= 0 && slideIndex < slides.length - 1) {
      slideIndex++;
      const translateDistance = getTranslateDistance();
      projectWrapper.style.transform = `translate3d(${translateDistance}px, 0, 0)`;
      leftArrow.classList.remove("inactive");
      rightArrow.classList.toggle("inactive", slideIndex === slides.length - 1);
    }
  }

  function getTranslateDistance() {
    const vw = window.innerWidth;
    if (vw >= 992) {
      return (-slideIndex * (30 * vw)) / 100;
    } else if (vw <= 991 && vw >= 480) {
      return (-slideIndex * (45 * vw)) / 100;
    } else {
      return (-slideIndex * (90 * vw)) / 100;
    }
  }
}

// Usage example:
initializeSlider(
  "arrow-left",
  "arrow-right",
  ".selected-project-wrapper",
  ".project-item-parent"
);

initializeSlider(
  "qual-arrow-left",
  "qual-arrow-right",
  ".qualification-items-marquee-inner",
  ".qualification-item"
);

initializeSlider(
  "blog-arrow-left",
  "blog-arrow-right",
  ".selected-blog-wrapper-child",
  ".blog-item-parent"
);



// SIDE NAV FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  const verticalNavItemElements =
    document.querySelectorAll(".vertical-nav-item");

  // Add active classes to the children of the first element initially
  const firstNavItem = verticalNavItemElements[0];
  firstNavItem
    .querySelector(".ellipse-side-bar")
    .classList.add("ellipse-active");
  firstNavItem
    .querySelector(".vertical-nav-anchor-btm--right")
    .classList.add("side-active");
  firstNavItem
    .querySelector(".vertical-nav-anchor-top--left")
    .classList.add("side-active");
  firstNavItem.classList.add("vertical-active");

  const sideModalNavItemElements = document.querySelectorAll(
    ".side-modal-menu-item"
  );

  // Add active classes to the children of the first side-modal-nav item initially
  const firstSideModalItem = sideModalNavItemElements[0];
  firstSideModalItem
    .querySelector(".side-modal-menu-item-inner")
    .classList.add("side-padding-active");
  firstSideModalItem
    .querySelector(".side-modal-menu-text")
    .classList.add("side-modal-active");
  firstSideModalItem
    .querySelector(".side-modal-arrow")
    .classList.add("side-modal-active");
  firstSideModalItem
    .querySelector(".side-modal-anchor-left")
    .classList.add("side-modal-active");
  firstSideModalItem
    .querySelector(".side-modal-anchor-right")
    .classList.add("side-modal-active");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const threshold = windowHeight * 0.6;

    return rect.bottom >= threshold && rect.top <= windowHeight - threshold;
  }

  window.addEventListener("scroll", function () {
    // Handle vertical-nav-item elements
    verticalNavItemElements.forEach((navItem) => {
      const sideNavItem = navItem.querySelector(".side-nav-item");
      const targetId = sideNavItem.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection && isInViewport(targetSection)) {
        verticalNavItemElements.forEach((siblingNavItem) => {
          siblingNavItem
            .querySelector(".ellipse-side-bar")
            .classList.remove("ellipse-active");
          siblingNavItem
            .querySelector(".vertical-nav-anchor-btm--right")
            .classList.remove("side-active");
          siblingNavItem
            .querySelector(".vertical-nav-anchor-top--left")
            .classList.remove("side-active");
          siblingNavItem.classList.remove("vertical-active");
        });
        navItem
          .querySelector(".ellipse-side-bar")
          .classList.add("ellipse-active");
        navItem
          .querySelector(".vertical-nav-anchor-btm--right")
          .classList.add("side-active");
        navItem
          .querySelector(".vertical-nav-anchor-top--left")
          .classList.add("side-active");
        navItem.classList.add("vertical-active");
        return;
      }
    });

    // Handle side-modal-nav elements
    sideModalNavItemElements.forEach((navItem) => {
      const targetId = navItem.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection && isInViewport(targetSection)) {
        sideModalNavItemElements.forEach((siblingNavItem) => {
          siblingNavItem
            .querySelector(".side-modal-menu-item-inner")
            .classList.remove("side-padding-active");
          siblingNavItem
            .querySelector(".side-modal-menu-text")
            .classList.remove("side-modal-active");
          siblingNavItem
            .querySelector(".side-modal-arrow")
            .classList.remove("side-modal-active");
          siblingNavItem
            .querySelector(".side-modal-anchor-left")
            .classList.remove("side-modal-active");
          siblingNavItem
            .querySelector(".side-modal-anchor-right")
            .classList.remove("side-modal-active");
        });
        navItem
          .querySelector(".side-modal-menu-item-inner")
          .classList.add("side-padding-active");
        navItem
          .querySelector(".side-modal-menu-text")
          .classList.add("side-modal-active");
        navItem
          .querySelector(".side-modal-arrow")
          .classList.add("side-modal-active");
        navItem
          .querySelector(".side-modal-anchor-left")
          .classList.add("side-modal-active");
        navItem
          .querySelector(".side-modal-anchor-right")
          .classList.add("side-modal-active");
        return;
      }
    });
  });
});



</script>
