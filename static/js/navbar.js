var $document = $(document);

$document.on('scroll', function() {
   if ($document.scrollTop() > window.innerHeight) {
     $('.navbar-overlay').css('opacity', '0');
     $('.brand').addClass('brand-reduced');
   } else {
     $('.navbar-overlay').css('opacity', (window.innerHeight - this.body.scrollTop) / window.innerHeight);
     $('.brand').removeClass('brand-reduced');
   }
});