function Login(log, pass, type) {
		
		this.log = log;
		this.pass = pass;
		this.type = type;
		this.secret = process.env.MY_DATABASE_PASSWORD;
		
		Login.prototype.showSecret = () => {
			console.log(`${this.secret}`);
		}
};



module.exports = Login;