$(document).ready(function () {
    var zipCode = 37664;//$("#userZip").val().trim();
    var city = "kingsport";//$("#userCity").val().trim();
    var listCount = 12;//$("#listCount").val();
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
        for (i = 0; i < results.length; i++) {
            var card = $("<div>");
            var innerCard = $("<div>");
            var imgCard = $("<img>");
            var spanCard = $("<span>");
            var container = $(".container");
            var imgDiv = $("<div>");



            spanCard.html(results[i].address.line)

            card.addClass("card medium");

            innerCard.addClass("card-image");

            imgCard.attr("src", results[i].thumbnail);

            imgCard.addClass("responsive-img");

            spanCard.addClass("card-title");

            imgDiv.addClass("col l4")
            
            

            

            innerCard.append(imgCard);
            innerCard.append(spanCard);
            card.append(innerCard);
            imgDiv.append(card);
            $(".row").append(imgDiv);
            
        }
    });
});