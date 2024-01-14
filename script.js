const toTop = document.getElementById('toTop');

toTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
  });