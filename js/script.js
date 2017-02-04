console.log("JS WORKS!");

$(document).ready(function(){
    console.log("THE JQUERY WORKS TOO!");

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
  });




});
