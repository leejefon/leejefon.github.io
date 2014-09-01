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
		return res.view({

		});
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

	function contact (req, res) {

	}

    return {
		index: index,
        resume: resume,
		contact: contact,

        _config: {}
    };
})();
