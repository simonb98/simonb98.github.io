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
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  //fills backgroundcolor of navbar when scrolled down
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  })

  //moving pictures at top and contact page
  let moveGallery = function () {
    let pictures = document.getElementsByClassName('picture');

    for (let i = 0; i < pictures.length; i++) {
      let x = Math.floor(Math.random() * 100);
      let trans1 = "translate(" + x + "vw, 110vh)"
      let trans2 = "translate(" + x + "vw, -110vh)"
      pictures.item(i).animate([{
          transform: trans1
        },
        {
          transform: trans2
        }
      ], {
        duration: Math.floor(Math.random() * 25000) + 10000,
        iterations: Infinity,
        delay: Math.floor(Math.random() * 20000) + 1500
      })
    }
  }

  moveGallery();

  const tabList = document.querySelector(".tablist");
  const tabs = document.querySelectorAll(".tablist__tab");
  const activeTab = document.querySelector(".tablist__tab.is-active");
  const selectionBar = document.querySelector(".selection-bar");

  const toggleTabClass = (target, elements) => {
    Array.from(elements).forEach((element) =>
      element.classList.remove("is-active")
    );
    target.classList.add("is-active");
  };

  const moveTabSelectionBar = (targetTab) => {
    const rectTargetTab = targetTab.getBoundingClientRect();
    const rectTabList = tabList.getBoundingClientRect();
    const selectionBarWidth = rectTargetTab.width / rectTabList.width;
    const selectionBarPosition = rectTargetTab.left - rectTabList.left;

    selectionBar.style.transform = `matrix(${selectionBarWidth}, 0, 0, 1, ${selectionBarPosition}, 1)`;
  };

  let currenttab = 1;

  const showTabContent = (target) => {
    let story = document.getElementById("story");
    let portfolio = document.getElementById("portfolio");
    let experience = document.getElementById("experience");
    let education = document.getElementById("education");

    let previoustab = currenttab;

    if (!target.className.toString().includes("is-active")) {
      if (target.className.toString().includes("story")) {
        previoustab = currenttab;
        currenttab = 1;
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
          story.className = "hidden";
          portfolio.className = "hidden";
          experience.className = "hidden";
          education.className = "";
        }, 250);
        animateSlide(previoustab, currenttab, education);
        
      }
    }
  }

  function animateSlide(pt, ct, newtab){
    let oldtab;

    switch(pt){
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

    if (ct > pt){
      newtab.animate([{
          transform: "translate(150vw)"
        },
        {
          transform: "translate(0vw)"
        }
      ], {
        duration: 250,
        delay: 250
      })
      oldtab.animate([{
        transform: "translate(0vw)"
        },
        {
            transform: "translate(-150vw)"
        }
        ], {
        duration: 250
        })
    } else {
      newtab.animate([{
          transform: "translate(-150vw)"
        },
        {
          transform: "translate(0vw)"
        }
      ], {
        duration: 250,
        delay: 250
      })
      oldtab.animate([{
        transform: "translate(0vw)"
        },
        {
            transform: "translate(150vw)"
        }
        ], {
        duration: 250
        })
    }

  }

  Array.from(tabs).forEach((tab) => {
    tab.addEventListener("click", (event) => {
      showTabContent(event.target);
      toggleTabClass(event.target, tabs);
      moveTabSelectionBar(event.target);
    });
  });

  moveTabSelectionBar(activeTab);

  const toggleLiClass = (target) => {
    let elements = document.querySelectorAll(".portfli");
    Array.from(elements).forEach((element) => 
      element.classList.remove("active")
    );
    target.classList.add("active");
  };

  const toggleLiContentClass = (target) => {
    let elements = document.querySelectorAll(".portfcontent");
    Array.from(elements).forEach((element) => { 
      element.classList.remove("active"),
      element.classList.add("hidden")
    });
    target.classList.replace("hidden","active");
  };

  const showLiContent = (target) => {

    console.log(document.querySelector('#' + target.id + 'c'));
    let activeContent = document.querySelector('#' + target.id + 'c');
    console.log(activeContent);
    if(!target.className.toString().includes("active")){
      toggleLiContentClass(activeContent);
    }
  }

  Array.from(document.querySelectorAll(".portfli")).forEach((li) => {
    li.addEventListener("click", (event) => {
      showLiContent(event.target);
      toggleLiClass(event.target);
    });
  });

})(jQuery);