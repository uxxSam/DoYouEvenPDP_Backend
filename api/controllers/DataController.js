/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	fetch: function(req, res) {
		if (!req.header.ID) return res.send(403, {
			message: 'Please Login first'
		});
	// 	Model.find({
	// 	  where: { id: req.header.ID }
	// 	}).exec(function(err, res){
	// 		if (err || !res) {
	// 			return res.send(403, {
	// 				message: 'Token Invalid'
	// 			});
	// 		}
	// 		return res.status(200).json({
	// 			 ID: user.id,
	// 			 Message: 'login success'
	// 	 })
	//  };
 }
 };
