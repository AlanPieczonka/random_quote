// I know this project is very similiar to Freecodecamp example, but I really liked it and wanted to give it exactly the same look. This app was much easier than the weather app.
console.log("JS WORKS!");

$(document).ready(function(){
    console.log("THE JQUERY WORKS TOO!");

    var colors = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#34495e",
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#f39c12",
      "#d35400",
      "#c0392b"
    ];


    function changeColor(){



      var randomnumber = Math.floor((Math.random() * 17));
      console.log(randomnumber);


      $('body').css('background-color', colors[randomnumber] );
      $('.tweet').css('background-color', colors[randomnumber]);
      $('button').css('background-color', colors[randomnumber]);
      $('button').css('border', colors[randomnumber]);



    };






    function getNewQuote(){
      $.ajax({ //making an API request
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp', //becouse chrome doesn't allow normal json in this situation
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        },
        success: function(response){
          console.log(response.quoteText);
          console.log(response.quoteAuthor);
          $(".myQuote").text(response.quoteText);
          //$(".author").text(response.quoteAuthor);
          quote = response.quoteText;
          if(response.quoteAuthor){
            author = response.quoteAuthor;
            $(".author").text(response.quoteAuthor);
          }
          else{
            author = "Unknown author";
            $(".author").text("Unknown author");

          }


          //$(this).attr('href', 'https://twitter.com/intent/tweet?text=' + quote);
          $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + quote + "-- " + author);
        }
      });

      //tweetQuote(response.quoteText, response.quoteAuthor);
    }

    getNewQuote();


  $(".yo").on('click', function() {
    getNewQuote();
    changeColor();
  });




});
