$(document).on('scroll', function() {
   if (this.body.scrollTop > window.innerHeight) {
     $('.navbar-overlay').css('opacity', '0');
   } else {
     $('.navbar-overlay').css('opacity', (window.innerHeight - this.body.scrollTop) / window.innerHeight);
   }
});