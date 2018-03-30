// Define the buttons that will appear at the beginning and also a variable to search through the document

var buttons = ["Get Schwifty", "Interdimensional TV", "Family Guy", "Family Guy Chicken", "Terminator","Migos", "Superhero Dance", "Rick and Morty", "Game of Thrones","Black Mirror","Pickle Rick"];
var area = $('.body');

//Now we want to define a variable to place buttons in the "area" variable

var addButtons = area.find(".button-selection")

//loop to create the buttons
function populate(){

  $(addButtons).empty();

for (var i = 0; i < buttons.length; i++) {

    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");
    var letterBtn = $("<button>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    letterBtn.addClass("letter-button letter letter-button-color");

    // 4. Then give each "letterBtn" a data-attribute called "data-letter".
    letterBtn.attr("data-letter", buttons[i]);

    // 5. Then give each "letterBtns" a text equal to "letters[i]".
    letterBtn.text(buttons[i]);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    addButtons.append(letterBtn);

  }
};
populate();


  

//function to clear the array and add all the new buttons again



  //Function to add buttons to 
  $('#add-button').on('click', function(event){
    event.preventDefault();
//variable for the button click

var newButton = $('#button-input').val().trim();
//Adding the input to the array
buttons.push(newButton);
 
populate();


  });

  //Now adding the function to pull the gif info

  $(".letter-button").on("click", function() {
    console.log("meow")
    
    //Pulling the gif based on the click
    var gif = $(this).attr("data-letter");
    //The url that will call the API, copied from example in class
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;
        console.log(results)

        //Running the for loop to add the number of gifs returned which is 10

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class = 'col-md-4 float-left'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $(".gifs-appear-here").prepend(gifDiv);
        }
      });
  });

  //Items Open
  //1. need to add the button from the form input
  //2. Gifs need to be paused when they come in
  //3. 