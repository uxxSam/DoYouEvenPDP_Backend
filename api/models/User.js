/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// {'longitude': 0.0, 'latitude': 0.0, 'name_of_program': u'Millionair Club Charity',
//'people_served': u'OPEN TO ALL ', 'meal_served': u'Breakfast', 'location': u'2515 Western Ave.,  Seattle'},
 var bcrypt = require('bcrypt');

 module.exports = {

   attributes: {
         name: {
             type: 'string',
         },
         email: {
             type: 'string',
             required: true,
             unique: true
         },
         age: {
             type: 'string',
             required: true,
         },
         gender: {
             type: 'string',
             required: true,
         },
         password: {
             type: 'string',
             required: true
         },
         // override default toJSON
         toJSON: function() {
             var obj = this.toObject();
             delete obj.password;
             return obj;
         }
   },

   beforeCreate: function(user, cb) {
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(user.password, salt, function(err, hash) {
             if(err) {
                 console.log(err);
                 cb(err);
             } else {
                 user.password = hash;
                 console.log("Created User!");
                 cb(null, user);
             }
           });
       });
   }

 };
