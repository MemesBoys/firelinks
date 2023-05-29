window.addEventListener("load", function() {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
      });
      document.querySelector('[href="#close"]').addEventListener('click',function(){
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
      });
      arrowTop.onclick = function() {
        window.scrollTo(scrollX, 0);
        // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
      };
  
      window.addEventListener('scroll', function() {
        arrowTop.hidden = (this.scrollY < document.documentElement.clientHeight);
      });
});