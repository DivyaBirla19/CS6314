var express = require('express');
const router = new express.Router();
var passport = require('passport');
var dotenv = require('dotenv');
var util = require('util');
var url = require('url');
const cors =require('cors');
var querystring = require('querystring');
dotenv.config();

router.get('/login',cors(),passport.authenticate('auth0',{
    scope:'open email profile'
}),function (req,res){
    res.redirect('http://localhost:3000/login');
})
router.get('/callback', cors(),function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || '/user');
      });
    })(req, res, next);
  });

  router.get('/logout',cors(), (req, res) => {
    req.logout();
  
    var returnTo = req.protocol + '://' + req.hostname;
    var port = req.connection.localPort;
    if (port !== undefined && port !== 80 && port !== 443) {
      returnTo += ':' + port;
    }
    var logoutURL = new url.URL(
      util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
    );
    var searchString = querystring.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      returnTo: 'http://localhost:3000'
    });
    logoutURL.search = searchString;
  
    res.redirect(logoutURL);
  });
  
  module.exports = router;