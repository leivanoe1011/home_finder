# home_finder


The original Realtor API call that we can use a sample for the app.js

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=200&offset=0&state_code=NY",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtor.p.rapidapi.com",
		"x-rapidapi-key": "0c292c0993mshd75f0effe5adad9p120e45jsn157b0022e4d8"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

