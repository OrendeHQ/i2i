var eventsList = [];
var eventsContainer = document.querySelector('#events .events');

$(document).on('click', '#all', function() { 
  $('.title').children().removeClass('active');
  $('#all').addClass('active');
  displayEvents(eventsList); 
});
$(document).on('click', '#past', function() {
  var pastEvents = eventsList.filter(function(e) {return e.status === 'completed'});

  $('.title').children().removeClass('active');
  $('#past').addClass('active');
  displayEvents(pastEvents);
});
$(document).on('click', '#current', function() {
  $('.title').children().removeClass('active');
  $('#current').addClass('active');
  var currentEvents = eventsList.filter(function(e) {return e.status === 'live'});
  displayEvents(currentEvents);
})

$.ajax({
  url: 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=F6G2U7K4IPMCFCZYTSUQ',
  type: 'GET'
}).done(function(res) {
  eventsList = res.events.reverse();
  displayEvents(eventsList);
}).fail(function(e) {});

function displayEvents(eventsList) {
  eventsContainer.innerHTML = eventsList.map(function(e) {
    var image = (e.logo) ? e.logo.url : '/img/logos/eventbrite.png';
    var description = e.description.text || 'No Description';
    var datetime = new Date(e.start.utc);
    var fullDateTime = datetime.toLocaleString();
    return '\
      <div class="col-md-4">\
        <div class="card">\
          <img class="card-img-top" src="' + image + '" />\
          <div class="card-block">\
            <h4 class="card-title">' + e.name.text + '</h4>\
            <p class="card-text text-muted">' + fullDateTime + '</p>\
            <p class="card-text">' + description + '</p>\
            <a href="' + e.url + '" target="_blank" class="btn btn-danger">RSVP</a>\
          </div>\
        </div>\
      </div>\
    ';
  }).join('');
}
