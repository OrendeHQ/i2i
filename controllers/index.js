const router = require('express').Router();

module.exports = {

  // GET /
  renderLanding(req, res) {
    res.render('landing', {
      title: 'i2i | Innovation and Insights Center',
      customStyle: '/static/css/index.css'
    });
  },

  // GET /clients
  renderClients(req, res) {
    res.render('clients', {
      title: 'Clients@i2i',
      customStyle: '/static/css/clients.css'
    });
  },

  // GET /contact
  renderContact(req, res) {
    res.render('contact', {
      title: 'i2i Contacts',
      customStyle: '/static/css/contact.css'
    });
  },

  // GET /custom-service
  renderCustomService(req, res) {
    res.render('custom-service', {
      title: 'Custom Service',
      customStyle: '/static/css/custom-service.css'
    });
  },

  // GET /customer-insight-innovation
  renderCustomerInsight(req, res) {
    res.render('customer-insight-innovation', {
      title: 'Customer Insights and Innovation',
      customStyle: '/static/css/customer-insight-innovation.css'
    });
  },

  // GET /disruptive-innovation
  renderDisruptiveInnovation(req, res) {
    res.render('disruptive-innovation', {
      title: 'Disruptive Innovation',
      customStyle: '/static/css/disruptive-innovation.css'
    });
  },

  // GET /events
  renderEvents(req, res) {
    res.render('events', {
      title: 'Events@i2i',
      customStyle: '/static/css/events.css'
    });
  },

  // GET /people
  renderPeople(req, res) {
    res.render('people', {
      title: 'People@i2i',
      customStyle: '/static/css/people.css'
    });
  },

  // GET /research
  renderResearch(req, res) {
    res.render('research', {
      title: 'Research@i2i',
      customStyle: '/static/css/research.css'
    });
  },

  // GET /startup360
  renderStartup(req, res) {
    res.render('startup360', {
      title: 'Start360',
      customStyle: '/static/css/startup360.css'
    });
  }

}
