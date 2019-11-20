var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function() {

    
    var click1 = null
    var click2 = null
    for(let i=0; i<pictures.length;i++){
    
        var column = $("<div class='col-12 col-md-4 col-lg-3'></div>")
        $(".cards").append(column)
        var card = $("<div class='card'></div>")
        column.append(card)
        var image = $(" <img class='card-img-top' alt=''>")
        card.append(image)
        var cardBody = $("<div class='card-body'></div>")
        card.append(cardBody)
        var title = $(" <h5 class='card-title'></h5>")
        cardBody.append(title)
        var subtitle = $(" <p class='card-text'></p>")
        cardBody.append(subtitle)
        var dislike = $("<a href='#' class='btn btn-primary'><i class='fas fa-poo'></i></a>")
        cardBody.append(dislike)
        var votes = $("<span class ='counting'></span>")
        var words= $("<span> votes</span>")
        cardBody.append(votes)
        cardBody.append(words)
        var like = $("<a href='#' class='btn btn-primary'><i class='fas fa-heart'></i></a>")
        cardBody.append(like)
    
        card.attr("id",pictures[i].id)
        dislike.attr("id",pictures[i].id)
        votes.attr("id", pictures[i].id)
        image.attr("src",pictures[i].url)
        title.html(pictures[i].title)
        subtitle.html(pictures[i].subtile)
        votes.html( pictures[i].votes)
        // produit_id = pictures[i].id
        // currentProductId = GET_PARAM("produit_id")
        // console.log(currentProductId)
        // currentProduct = pictures[currentProductId]



        dislike.click(function(){

                // var bla = pictures[$(this).attr('id').replace("like-", "")].votes
                // console.log($(this).attr('id').replace("like-", ""))
                
                
                
                if(pictures[i].id == $(this).attr('id')){
                    countDislike = parseInt(pictures[i].votes-1)
                    pictures[i].votes = countDislike
                    votes.html(countDislike)
                    var disLike_json = JSON.stringify(countDislike);
                    sessionStorage.setItem("object",disLike_json);
                }
            // }
          
        
        });
         
        like.click(function(){
            if(pictures[i].id == $(this).attr('id')){

                var countLike = parseInt(pictures[i].votes + 1)
                var Like_json = JSON.stringify(countLike);
                sessionStorage.setItem("object1",Like_json);
            }
            });
    }

});
// window.location.href = "result.html"
