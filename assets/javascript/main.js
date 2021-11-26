var x = document.querySelector('.auth__form__group.show-password .auth-form__input');
var y = document.querySelector('.show-password i');
var y1 = document.querySelectorAll(".show-password i")[1];
var iconEye = document.querySelector('.eye');
var iconEyeSlash = document.querySelector('.eye-slash');

y.addEventListener("click",function(){
    if(x.type==='password')
    {
        x.type = 'text';
        iconEye.style.display = 'none';
        iconEyeSlash.style.display = 'block';
    }
    else{
        x.type = 'password';
         iconEye.style.display = 'block';
         iconEyeSlash.style.display = 'none';
    }
});
y1.addEventListener("click", function () {
  if (x.type === "password") {
    x.type = "text";
    iconEye.style.display = "none";
    iconEyeSlash.style.display = "block";
  } else {
    x.type = "password";
    iconEye.style.display = "block";
    iconEyeSlash.style.display = "none";
  }
});

//modal

var modalElement = document.querySelector('.modal');

var authFormElement = document.querySelectorAll('.auth-form');

var loginElement = document.querySelector('.btn-login');

var signUpElement = document.querySelector('.btn-sign-up');
loginElement.addEventListener("click",function(){
    if(modalElement.style.display == 'none'){
        modalElement.style.display = "block";
        authFormElement[0].style.display = "block";
    }
});

signUpElement.addEventListener("click", function () {
  if (modalElement.style.display == "none") {
    modalElement.style.display = "block";
    authFormElement[1].style.display = "block";
  }
});

authFormElement[0].addEventListener("click",function(e){
    e.stopPropagation();
    if(e.target.className !== 'auth-form'){
        modalElement.addEventListener("click", function () {
          modalElement.style.display = "none";
          authFormElement[0].style.display = "none";
          authFormElement[1].style.display = "none";
        });
    }
});
authFormElement[1].addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.className !== "auth-form") {
    modalElement.addEventListener("click", function () {
      modalElement.style.display = "none";
      authFormElement[0].style.display = "none";
      authFormElement[1].style.display = "none";
    });
  }
});

//aos
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 320, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});