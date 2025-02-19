// =============================================contact form open----===------------------//
document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.body.classList.contains("home-page");
  if (homePage) {
    let contactCon = document.querySelector(".contact-container");
    setTimeout(function () {
      contactCon.classList.remove("hide");
    }, 4000);
    let cancelIcon = document.getElementById("cancelIcon");
    cancelIcon.addEventListener("click", function () {
      contactCon.classList.add("hide");
    });
  }
});

// ======================================================================================//
// ===on click contact-form===========///////
function opencontact() {
  let contactcon = document.getElementById("quote");
  contactcon.classList.remove("hide");
  let cancelIcon = document.getElementById("cancelIcon");
  cancelIcon.addEventListener("click", function () {
    contactcon.classList.add("hide");
  });
}
// ==========================/////////////
// ==========footer year============//

let fullYear = document.getElementById("fullyear");
let year = new Date().getFullYear();
fullYear.innerText = year + " |";

// ===============================//
// =============Home page timer=======//
function startCountdown() {
  var count = 40;
  var counterUp = document.getElementById("counterUp");
  var countdownInterval = setInterval(function () {
    counterUp.textContent = count;
    count++;
    if (count < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}
// =================================//

// =====Package J.s==========================================================================//

function toggleAllContent() {
  var allExtraContent = document.querySelectorAll(".extra-content");
  let icons = document.getElementsByClassName("icon");

  allExtraContent.forEach(function (content) {
    content.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent2() {
  let extraContent2 = document.querySelectorAll(".extra-content2");
  let icons = document.getElementsByClassName("icon1");
  extraContent2.forEach(function (content) {
    content.classList.toggle("hidden");
  });

  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent3() {
  let extraContent3 = document.querySelectorAll(".extra-content3");
  let icons = document.getElementsByClassName("icon2");

  extraContent3.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent4() {
  let extraContent4 = document.querySelectorAll(".extra-content4");
  let icons = document.getElementsByClassName("icon3");

  extraContent4.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent5() {
  let extraContent5 = document.querySelectorAll(".extra-content5");
  let icons = document.getElementsByClassName("icon4");

  extraContent5.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}



function toggleContent6() {
  let extraContent6 = document.querySelectorAll(".extra-content6");
  let icons = document.getElementsByClassName("icon5");

  extraContent6.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent7() {
  let extraContent7 = document.querySelectorAll(".extra-content7");
  let icons = document.getElementsByClassName("icon6");

  extraContent7.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent8() {
  let extraContent8 = document.querySelectorAll(".extra-content8");
  let icons = document.getElementsByClassName("icon7");

  extraContent8.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}
function toggleContent9() {
  let extraContent9 = document.querySelectorAll(".extra-content9");
  let icons = document.getElementsByClassName("icon8");

  extraContent9.forEach(function (e) {
    e.classList.toggle("hidden");
  });
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  }
}

//==================================script of google sheets=================================//
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxWcj2rQW9MhX3lrdJ60aRP-MhMp6KFV_6QFcxyF48iHfX4LH3glD76FMZpQGYvkBUe7Q/exec';
// const form = document.forms['submit-to-google-sheet'];
// const msg = document.getElementById('msg');

// form.addEventListener('submit', e => {
//     e.preventDefault();
    
//     // Clear the message immediately
//     msg.innerHTML = "Submitting...";

//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//             msg.innerHTML = "Thanks for details!";
//             form.reset();
//             setTimeout(function () {
//                 msg.innerHTML = "";
//             }, 1000);
//         })
//         .catch(error => {
//             msg.innerHTML = "Error submitting form.";
//             console.error('Error!', error.message);
//         });
// });

// Define the FormSubmitter class
class FormSubmitter {
  constructor(scriptURL, formSelector, msgElementId) {
      this.scriptURL = scriptURL;
      this.form = document.querySelector(formSelector);
      this.msg = document.getElementById(msgElementId);

      if (!this.form) {
          console.error(`Form with selector '${formSelector}' not found.`);
          return;
      }

      this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
      event.preventDefault();
      this.msg.innerHTML = '<p class="text-white">Submitting... <i class="fa-solid fa-spinner fa-spin-pulse" style="color: #ffffff;"></i></p>';

      fetch(this.scriptURL, { method: 'POST', body: new FormData(this.form) })
          .then(response => {
              this.msg.innerHTML = '<p class="text-white">Thanxs for details <i class="fa-solid fa-check fa-bounce" style="color: #ffffff;""></i></p>';
              this.form.reset();
              setTimeout(() => {
                  this.msg.innerHTML = '';
              }, 1000);
              
              
          })
          .catch(error => {
              this.msg.innerHTML = "Error submitting form.";
              console.error('Error!', error.message);
          });
  }
}

// Usage on first page
const scriptURL = 'https://script.google.com/macros/s/AKfycbxWcj2rQW9MhX3lrdJ60aRP-MhMp6KFV_6QFcxyF48iHfX4LH3glD76FMZpQGYvkBUe7Q/exec';
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page1', 'msg-page1');

// Usage on second page
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page2', 'msg-page2');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page3', 'msg-page3');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page4', 'msg-page4');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page5', 'msg-page5');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page6', 'msg-page6');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page7', 'msg-page8');
new FormSubmitter(scriptURL, '#submit-to-google-sheet-page7', 'msg-page8');









// ========================================================================================//
