var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

// function hasImage(status)
// {
// 	try
// 	{
// 		return status.entities.media
// 	}
// 	catch(e){};
// }

var retweet = function() 
{
  var params = 
  {
    q: '#ACNH, Daisy, -mae',
    result_type: 'recent',
    tweet_mode: 'extended',
    lang: 'en'
 } 


    Twitter.get('search/tweets', params, function(err, data) 
    {
    	//console.log(data);
    	// var imageExist = data.statuses[0].metadata;
    	 // var extentities = data.statuses[0].entities;
    	// var indices = entities.user_mentions[0].indices;

         console.log(data.statuses);
        // return;
      // if there no errors


        if (!err) 
        {
          // grab ID of tweet to retweet
            

            // Tell TWITTER to retweet
            for(let status of data.statuses)
            {
            	if(!status.entities.hasOwnProperty('media'))
            		continue
            	let retweetId = status.id_str;
	            Twitter.post('statuses/retweet/:id', 
	            {

	                id: retweetId
	            }, function(err, response) {
	                if (response) {
	                    console.log('Retweeted!!!');
	                }
	                // if there was an error while tweeting
	                if (err) 
	                {
	                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
	                }
	                   else 
			        {
			          console.log('Something went wrong while SEARCHING...');
			        }
	            });
        }
        // if unable to Search a tweet
    }
            
    });
}

retweet();