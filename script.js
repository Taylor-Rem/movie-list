const movieList = document.querySelector("ul");
const inputField = document.querySelector("input");
const form = document.querySelector("form");

const addMovie = (event) => {
  event.preventDefault();
  // create list and span items
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  // set text content of span item to user input
  movieTitle.textContent = inputField.value;
  // calling cross off function on span click
  movieTitle.addEventListener("click", crossOffMovie);
  // adding span to list item
  movie.appendChild(movieTitle);
  // creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  // adding delete button next to list item
  movie.appendChild(deleteBtn);
  // calling delete function on delete button click
  deleteBtn.addEventListener("click", deleteMovie);
  // adding list item
  movieList.appendChild(movie);
  // resetting input
  inputField.value = "";
};

form.addEventListener("submit", addMovie);

const deleteMovie = (event) => {
  event.target.parentNode.remove();
};
const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
};
