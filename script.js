let rating = 0;

function ratingHandler(userRating){
    //unselect all buttons
    for(let i = 1; i <= 5; i++){
        document.getElementById("rate-" + i).className = "rate-btn";
    }

    //select user chosen button
    const selectedBtn = document.getElementById("rate-" + userRating);
    selectedBtn.className = "selected";
    rating = userRating;
}

function submitHandler() {
    //if user chooses no rating, return
    if(rating === 0){
        alert("Please choose a rating.");
        return;
    }
    
    //display thank you card
    const ratingContainer = document.getElementsByClassName("rating-container");
    const thankYouContainer = document.getElementsByClassName("thank-you-container");
    const rateSelection = document.getElementById("rating");
    ratingContainer[0].style.display = "none";
    thankYouContainer[0].style.display = "grid";
    rateSelection.innerHTML = rating;
}