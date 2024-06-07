const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const results = document.querySelector('.search-results');

form.addEventListener("submit", searchPages);

// search pages
function searchPages(e) {
  e.preventDefault();
  // the search term that user wanna search
  const value = input.value;
  // checks the validity
  if (!value) {
    results.innerHTML = '<div class="error">Please enter valid search term...</div>';
    return;
  }
  // fetching pages after checking validity
  fetchPages(value);
}

// fetch pages 
const fetchPages = async (searchValue) => {
  // loads the screen until the results are fetched properly
  results.innerHTML = '<div class="loading"></div>';
  // fetching results using url
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    // if there would be no results related to that search term
    if (results.length < 1) {
      results.innerHTML = '<div class="error">No matching results. Please try again...</div>';
      return;
    }
    // if there are results related to that search term
    renderResults(results);
  } catch (error) {
    results.innerHTML = '<div class="error">There was an error...</div>';
  }
};

// render results
const renderResults = (list) => {
  // mapping each item of the list and storing it into another list
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return (
        `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
          <h4>${title}</h4>
          <p>${snippet}</p>
        </a>`
      );
    })
    .join('');
  // displaying all the items of the new list
  results.innerHTML = `<div class="articles">${cardsList}</div>`;
};
