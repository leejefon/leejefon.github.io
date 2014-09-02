/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/08/19
 */

module.exports = (function(){

	function index (req, res) {
		return res.view();
	}

	function resume (req, res) {
		var category = req.param('category');

		ResumeService.get(category, function (err, data) {
			return res.json({
				status: 'OK',
				data: data
			});
		});
	}

	function sendmail (req, res) {
		EmailService.sendContactEmail({
			name: req.body.name,
			email: req.body.email,
			website: req.body.website,
			message: req.body.message
		}, function (err, data) {
			return res.json({
				status: 'OK',
				data: data
			});
		});
	}

    return {
		index: index,
        resume: resume,
		sendmail: sendmail,

        _config: {}
    };
})();
