/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

document.querySelectorAll('.accordian-section').forEach(function(element) {
  element.addEventListener('click', revealAccordian);
});

document.querySelectorAll('#accordianOpenAll').forEach(function(element) {
  element.addEventListener('click', accordianOpenAll);
});

function revealAccordian(e) {
  if(!document.getElementById(this.dataset.target).classList.contains('accordian-hidden')) {
    document.getElementById(this.dataset.target).classList.add('accordian-hidden');
    switchAccordianImages();
    return;
  }

  document.querySelectorAll('.accordian-section').forEach(function(element) {
    document.getElementById(element.dataset.target).classList.add('accordian-hidden');
  });
  document.getElementById(this.dataset.target).classList.remove('accordian-hidden');
  switchAccordianImages();
}

function accordianOpenAll(e) {
  if(this.innerText === 'Open all') {
    this.innerText = 'Close all';
    document.querySelectorAll('.accordian-section').forEach(function(element) {
      document.getElementById(element.dataset.target).classList.remove('accordian-hidden');
    });
  } else {
    this.innerText = 'Open all';
    document.querySelectorAll('.accordian-section').forEach(function(element) {
      document.getElementById(element.dataset.target).classList.add('accordian-hidden');
    });
  }
}

function switchAccordianImages() {
  document.querySelectorAll('.accordian-section').forEach(function(element) {
    if(document.getElementById(element.dataset.target).classList.contains('accordian-hidden')) {
      document.getElementById(element.dataset.button).style.backgroundImage = 'url(/public/images/accordian-open.svg';
    } else {
      document.getElementById(element.dataset.button).style.backgroundImage = 'url(/public/images/accordian-close.svg)';
    }
  });
}
