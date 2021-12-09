"use strict";

/*!
 * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict
  // Closes responsive menu when a scroll trigger link is clicked

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  }); // Activate scrollspy to add active class to navbar items on scroll

  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  }); //fills backgroundcolor of navbar when scrolled down

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  }); //moving pictures at top and contact page

  var moveGallery = function moveGallery() {
    var pictures = document.getElementsByClassName('picture');

    for (var i = 0; i < pictures.length; i++) {
      var x = Math.floor(Math.random() * 100);
      var trans1 = "translate(" + x + "vw, 110vh)";
      var trans2 = "translate(" + x + "vw, -110vh)";
      pictures.item(i).animate([{
        transform: trans1
      }, {
        transform: trans2
      }], {
        duration: Math.floor(Math.random() * 25000) + 10000,
        iterations: Infinity,
        delay: Math.floor(Math.random() * 20000) + 1500
      });
    }
  };

  moveGallery();
  var tabList = document.querySelector(".tablist");
  var tabs = document.querySelectorAll(".tablist__tab");
  var activeTab = document.querySelector(".tablist__tab.is-active");
  var selectionBar = document.querySelector(".selection-bar");

  var toggleTabClass = function toggleTabClass(target, elements) {
    Array.from(elements).forEach(function (element) {
      return element.classList.remove("is-active");
    });
    target.classList.add("is-active");
  };

  var moveTabSelectionBar = function moveTabSelectionBar(targetTab) {
    var rectTargetTab = targetTab.getBoundingClientRect();
    var rectTabList = tabList.getBoundingClientRect();
    var selectionBarWidth = rectTargetTab.width / rectTabList.width;
    var selectionBarPosition = rectTargetTab.left - rectTabList.left;
    selectionBar.style.transform = "matrix(".concat(selectionBarWidth, ", 0, 0, 1, ").concat(selectionBarPosition, ", 1)");
  };

  var currenttab = 1;

  var showTabContent = function showTabContent(target) {
    var story = document.getElementById("story");
    var portfolio = document.getElementById("portfolio");
    var experience = document.getElementById("experience");
    var education = document.getElementById("education");
    var previoustab = currenttab;

    if (!target.className.toString().includes("is-active")) {
      if (target.className.toString().includes("story")) {
        previoustab = currenttab;
        currenttab = 1;
        setTimeout(function () {
          story.className = "";
          portfolio.className = "hidden";
          experience.className = "hidden";
          education.className = "hidden";
        }, 250);
        animateSlide(previoustab, currenttab, story);
      }

      if (target.className.toString().includes("portfolio")) {
        previoustab = currenttab;
        currenttab = 2;
        setTimeout(function () {
          story.className = "hidden";
          portfolio.className = "";
          experience.className = "hidden";
          education.className = "hidden";
        }, 250);
        animateSlide(previoustab, currenttab, portfolio);
      }

      if (target.className.toString().includes("experience")) {
        previoustab = currenttab;
        currenttab = 3;
        setTimeout(function () {
          story.className = "hidden";
          portfolio.className = "hidden";
          experience.className = "";
          education.className = "hidden";
        }, 250);
        animateSlide(previoustab, currenttab, experience);
      }

      if (target.className.toString().includes("education")) {
        previoustab = currenttab;
        currenttab = 4;
        setTimeout(function () {
          story.className = "hidden";
          portfolio.className = "hidden";
          experience.className = "hidden";
          education.className = "";
        }, 250);
        animateSlide(previoustab, currenttab, education);
      }
    }
  };

  function animateSlide(pt, ct, newtab) {
    var oldtab;

    switch (pt) {
      case 1:
        oldtab = document.getElementById("story");
        break;

      case 2:
        oldtab = document.getElementById("portfolio");
        break;

      case 3:
        oldtab = document.getElementById("experience");
        break;

      case 4:
        oldtab = document.getElementById("education");
        break;
    }

    if (ct > pt) {
      newtab.animate([{
        transform: "translate(150vw)"
      }, {
        transform: "translate(0vw)"
      }], {
        duration: 250,
        delay: 250
      });
      oldtab.animate([{
        transform: "translate(0vw)"
      }, {
        transform: "translate(-150vw)"
      }], {
        duration: 250
      });
    } else {
      newtab.animate([{
        transform: "translate(-150vw)"
      }, {
        transform: "translate(0vw)"
      }], {
        duration: 250,
        delay: 250
      });
      oldtab.animate([{
        transform: "translate(0vw)"
      }, {
        transform: "translate(150vw)"
      }], {
        duration: 250
      });
    }
  }

  Array.from(tabs).forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      showTabContent(event.target);
      toggleTabClass(event.target, tabs);
      moveTabSelectionBar(event.target);
    });
  });
  moveTabSelectionBar(activeTab);

  var toggleLiClass = function toggleLiClass(target) {
    var elements = document.querySelectorAll(".portfli");
    Array.from(elements).forEach(function (element) {
      return element.classList.remove("active");
    });
    target.classList.add("active");
  };

  var toggleLiContentClass = function toggleLiContentClass(target) {
    var elements = document.querySelectorAll(".portfcontent");
    Array.from(elements).forEach(function (element) {
      element.classList.remove("active"), element.classList.add("hidden");
    });
    target.classList.replace("hidden", "active");
  };

  var showLiContent = function showLiContent(target) {
    console.log(document.querySelector('#' + target.id + 'c'));
    var activeContent = document.querySelector('#' + target.id + 'c');
    console.log(activeContent);

    if (!target.className.toString().includes("active")) {
      toggleLiContentClass(activeContent);
    }
  };

  Array.from(document.querySelectorAll(".portfli")).forEach(function (li) {
    li.addEventListener("click", function (event) {
      showLiContent(event.target);
      toggleLiClass(event.target);
    });
  });
})(jQuery);