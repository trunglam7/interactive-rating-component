let rating = 0;

function ratingHandler(userRating){
    for(let i = 1; i <= 5; i++){
        document.getElementById("rate-" + i).className = "rate-btn";
    }
    const selectedBtn = document.getElementById("rate-" + userRating);
    selectedBtn.className = "selected";
    rating = userRating;
}

function submitHandler() {
    if(rating === 0){
        alert("Please choose a rating.");
        return;
    }
    
    const ratingContainer = document.getElementsByClassName("rating-container");
    const thankYouContainer = document.getElementsByClassName("thank-you-container");
    const rateSelection = document.getElementById("rating");
    ratingContainer[0].style.display = "none";
    thankYouContainer[0].style.display = "grid";
    rateSelection.innerHTML = rating;
}