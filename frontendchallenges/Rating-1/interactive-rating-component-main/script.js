/* Basic Interactive Rating App component, with 5 different rating buttons, and a submit button to submit the chosen rating with.
Two differring page layouts, with different picture, headers, and paragraphs.
First layout "Rating Page" where you choose rating and submit it
Second layout "Thank You Page" which shows once the "Submit" button has been pressed.
*/
// assigning js-elements on the global scope for this project
let rating = null;

// function that switches visiblity and contents of elements on the page
acceptRating = ()=>{
  if(rating){
    const paragraphElement2 = document.querySelector('.js-paragraph2');
    document.querySelector('.js-image1').hidden = true;
    document.querySelector('.js-image2').hidden = false;
    document.querySelector('.js-button-container').textContent = '';
    document.querySelector('.js-error-paragraph').textContent = '';
    document.querySelector('.js-header').textContent = 'Thank you!';
    document.querySelector('.js-paragraph1').textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    paragraphElement2.hidden = false;
    paragraphElement2.textContent = `You selected ${rating} out of 5!`;
  } else { // error message if no chosen rating
    document.querySelector('.js-error-paragraph').textContent = 'Error - no rating selected';
  }
}

// EventListeners for clicking each button - edited to simply save the value of "rating" rather than to have a function that only does that
document.querySelectorAll('.rating-button').forEach((ratingButton)=>{
  ratingButton.addEventListener('click',()=>{
    rating = ratingButton.textContent;
  })})
// submit button gets its own since they're special like that
document.querySelector('.js-submit-button').addEventListener('click',acceptRating);