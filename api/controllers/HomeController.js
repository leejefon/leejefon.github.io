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
		return res.view();
	}

    return {
		index: index,
        resume: resume,

        _config: {}
    };
})();
