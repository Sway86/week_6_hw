$(document).ready(function () {
    console.log("Page has loaded")
})
var cars = ["supra", "mr2", "gt86", "celica",];
var userInput = $("#car-input").val().trim();


function displayCarInfo() {
    var car = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=supra&api_key=IafDzLbPIttfPuROHS3yJYJZotd8IhoK&limit=5"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var carDiv = $("<div class='car'>");
        var image = $("<img>").attr("src", response.data.embed_url);
        carDiv.append(image);
        $("#cars-veiw").prepend(carDiv);
        $("#add-car").on("click", function (event) {
            event.preventDefault();
            var car = $("#car-input").val().trim();
            car.push(car);
            renderButtons();
        });

    });
    console.log("here");
}
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < cars.length; i++) {
        var a = $("<button>");
        a.addClass("car-btn");
        a.attr("data-name", cars[i]);
        a.text(cars[i]);
        $("#buttons-view").append(a);
    }
}





$(document).on("click", ".car-btn", displayCarInfo);
renderButtons();
