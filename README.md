# Book Review Mock Code Challenge

- Begin by running `npm install`
- Then start your json server with the command `json-server --watch db.json --routes routes.json`

## Deliverables

1. Display the book cover recieved from the server, with its title, description, likes, and iterate over reviews and add them to book reviews div when the page loads. Use the endpoint `/books/1` to retrieve the data for the book along with its reviews.

```
GET /books/1

Example Response:
{
  "id": 1,
  "title": "Eat & Run",
  "likes": 0,
  "image": "https://images-na.ssl-images-amazon.com/images/I/71XJTD4o1gL.jpg",
  "reviews": [
    {
      "id": 1,
      "bookId": 1,
      "title": "GREAT READ!!",
      "content": "Loved the book! Started eating vegan after and I feel amazing!"
    },
    {
      "id": 2,
      "bookId": 1,
      "title": "running is dumb",
      "content": "book was stupid AF.  running sucks. eat more meat!"
    },
    {
      "id": 3,
      "bookId": 1,
      "title": "Scott Jurek is the man!!",
      "content": "book was very inspiring loved hearing more about Scott's life!!"
    }
  ]
}
```

2. Click on the like button and increase the number of likes on the DOM. No persistence needed.

3. Add a new review to the page when the `#new-review` form is submitted. No persistence needed.

## Advanced Deliverables

1. Add a delete button to reviews, when the button is clicked remove the review from the DOM. For extra fun make this persist to the db.json file.

2. When users like the book, update the book in the db.json.

3. When users review a book, persist to the db.json.
