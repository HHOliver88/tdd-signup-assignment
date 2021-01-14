const Controller        = require('./controller');

class UserController extends Controller {

    constructor(req, res) {
        super(req, res);
    }
    
    signup() {
		this.page_params.PAGE.title = "Sign Up";
        this.page_params.PAGE.view = "signup";

        this.res.render("layouts/users.layout.ejs", this.page_params);
    }
}
module.exports = UserController;