setInterval(function(){
	$('#c-18_myCarousel .left').trigger('click');
}, 6000);

var $mailingModal = $('#mailing-list-modal');
setTimeout($mailingModal.modal.bind($mailingModal, 'show'), 5000);

$mailingModal.on('submit', 'form', function() {
  event.preventDefault();
  $.ajax({
    url: '/api/emails',
    method: 'POST',
    data: { email: $mailingModal.find('input[name="email"]').val() }
  }).done(function() {
    $mailingModal.find('.modal-body').html('<h5>Thanks for subscribing to our mailing list!</h5>');
  }).fail(function(e) {
    console.log(e);
  });
});
