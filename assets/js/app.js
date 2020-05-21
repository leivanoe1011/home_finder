$(document).ready(function(){
    var zipCode = 37664;//$("#userZip").val().trim();
    var city = "kingsport";//$("#userCity").val().trim();
    var listCount = 10;//$("#listCount").val();
    var stateCode = 47;//$("#stateCode").val().trim();
    var apiKey = "0c292c0993mshd75f0effe5adad9p120e45jsn157b0022e4d8";
   
    var apiSettings = {
        "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance"
        + "&postal_code=" + zipCode
        + "&city=" + city
        + "&limit=" + listCount
        + "&offset=0"
        + "&state_code=" + stateCode + "",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
        }
    };

    $.ajax(apiSettings).then(function (response) {
        console.log(response);
        var results = response.properties
        for(i = 0; i < results.length; i++){
            var card = $("<div>").addClass("card");
            var innerCard = $("<div>").addClass("card-iamge")
            var imgCard = $("<img>")
            $(".container").append(p);
            p.text(results[i].address.city);
        }
    });
});