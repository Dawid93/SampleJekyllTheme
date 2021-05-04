let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var toggle = document.querySelector('.navigation__item--toggle-js');

toggle.addEventListener('click', (e) => {
  var links = document.querySelectorAll('.navigation__item--link');
  console.log(links);

  for(let link of links){
    console.log(link);

    if(link.classList.contains('navigation__item--link-active')) {
      link.classList.remove('navigation__item--link-active');
    }
    else{
      link.classList.add('navigation__item--link-active');
    }
    
  }
});