module.exports = function(userManager,snowflake,dm){
	userManager.fetch(snowflake)
	.then( user => {
		return user.createDM();
	}).then( dmChannel => {
			dmChannel.send(dm);
	});
}