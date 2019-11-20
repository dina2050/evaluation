for(let i=0; i<pictures.length;i++){

    var column = $("<div class='col-12 col-md-4 col-lg-3'></div>")
    $(".cards").append(column)
    var card = $("<div class='card' style='width: 12rem;'></div>")
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
    var votes = $("<span></span>")
    cardBody.append(votes)
    var like = $("<a href='#' class='btn btn-primary'><i class='fas fa-heart'></i></a>")
    cardBody.append(like)


    card.attr("id",pictures[i].id)
    image.attr("src",pictures[i].url)
    title.html(pictures[i].title)
    subtitle.html(pictures[i].subtile)
    votes.html( pictures[i].votes + " votes " )
    var disLike_json = sessionStorage.getItem("object");
    var countDislike = JSON.parse(disLike_json);

    var Like_json = sessionStorage.getItem("object1");
    var countLike = JSON.parse(Like_json);

   
}