/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 // api/controllers/AuthController.js
 // res.send(403, { message: 'Not Authorized' })

 var passport = require('passport');


 module.exports = {

     login: function(req, res) {
         res.view();
     },
     process: function(req, res) {
         passport.authenticate('local', function(err, user, info) {
             if( (err)||(!user) ) {
                 return res.send(401, {
                     message: 'login failed'
                 });
                 res.send(err);
             }
             req.logIn(user, function(err) {
                 if(err) res.send(err);
								 return res.status(200).json({
										ID: user.id,
										Message: 'login success'
								});
                //  return res.send(200, {
                //      message: 'login successful',
								// 		 ID: user.email
                //  });
             });
         }) (req, res);
     },

     logout: function(req, res) {
         req.logOut();
         res.send(200, {message: 'logout successful'});
     }
 };

 module.exports.blueprints = {
     actions: true,
     rest: true,
     shortcuts: true
 };
