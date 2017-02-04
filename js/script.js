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
          $(".author").text(response.quoteAuthor);


        }
      });

      //tweetQuote(response.quoteText, response.quoteAuthor);
    }

    getNewQuote();

    $( "button" ).click(function() {
  getNewQuote();;
});


    function tweetQuote(quoteText, quoteAuthor){
      $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteText);

    };

});
