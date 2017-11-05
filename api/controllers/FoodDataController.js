/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	fetch: function(req, res) {
		if (!req.headers.id) return res.send(403, {
			message: 'Please Login first',
			Status: -1
		});
		User.find({ id: req.headers.id }).exec(function (err, usersNamedFinn){
		  if (err || usersNamedFinn.length == 0) {
		    return res.send(403, {
					message: 'Wrong Login',
					Status: -1
				})
		  } else {
					FoodData.find().exec(function (err, foodLocation){
						if (err || foodLocation.length == 0) {
							return res.send(403, {
								message: 'No record found',
								Status: -1
							});
						} else {
							return res.status(200).json({
								foodLocation
						 });
						}
					})
				}
			})
		}
	};
