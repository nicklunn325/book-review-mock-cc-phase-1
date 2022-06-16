// fetch /books/1 endpoint
//Display the book cover recieved from the server, with its title, description, likes, and iterate over reviews and add them to book reviews div when the page loads. Use the endpoint /books/1 to retrieve the data for the book along with its reviews.
fetch("http://localhost:3000/books/1")
  .then((res) => res.json())
  .then((book) => {
    // console.log(book);
    // display cover image, title, description, likes and reviews
    // select elements from the DOM to update
    let title = document.querySelector("#book-title");
    title.innerText = book.title;
    let description = document.querySelector("#book-description");
    description.innerText = book.description;
    let image = document.querySelector("#book-image");
    image.src = book.image;
    let likes = document.querySelector("#book-likes");
    likes.innerText = book.likes;
    let reviews = document.querySelector("#book-reviews");
    book.reviews.forEach((review) => {
      // create element
      let p = document.createElement("p");
      // update with title and description
      p.innerText = `${review.title} - ${review.content}`;
      // append to dom
      reviews.append(p);
      //   let div = document.createElement("div");
      //   let reviewTitle = document.createElement("h3");
      //   let content = document.createElement("p");
      //   reviewTitle.innerText = review.title;
      //   content.innerText = review.content;
      //   div.append(reviewTitle, content);
      //   reviews.append(div);
    });
  });

// Click on the like button and increase the number of likes on the DOM. No persistence needed.

// // grab the like button off the dom
// let likeBtn = document.querySelector("#like-button");
// // add click event listener
// likeBtn.addEventListener("click", () => {
//   //   console.log("clicked");
//   // get the likes
//   let likes = document.querySelector("#book-likes");
//   // increment by 1
//   let newLikes = parseInt(likes.innerText) + 1;
//   // update innerText
//   likes.innerText = newLikes;
// });

// Add a new review to the page when the #new-review form is submitted. No persistence needed.

// grab the #new-review form off the dom
let form = document.querySelector(".new-review");

// add submit event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab input values from the form
  let title = document.querySelector(".review-title").value;
  let content = document.querySelector(".review-content").value;
  // append to the DOM
  // select book-reviews div
  let reviews = document.querySelector("#book-reviews");
  // create element
  let p = document.createElement("p");
  // update with title and description
  p.innerText = `${title} - ${content}`;
  // append to dom
  reviews.append(p);
  event.target.reset();
});
