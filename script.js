/* 
Follow these steps to build the script for your Dog API demo:

1. Select the following elements from the page:
   - The "Fetch Dog" button
   - The spinner container
   - The dog image display area (div)

2. Add a click event listener to the button.

3. Inside the event listener:
   a. Show the spinner (`display: inline-block`)
   b. Clear the dog image display area

4. Use `fetch()` to send a GET request to this API endpoint:
   https://dog.ceo/api/breeds/image/random

5. Once you receive the response:
   a. Convert it to JSON
   b. Use the image URL from `data.message`

6. Create a Bootstrap card and insert the image into the page.

7. Use `.finally()` or a `try/catch/finally` block to:
   a. Hide the spinner after the request finishes
   b. Show an error message if something goes wrong

Bonus Challenge:
- Extract the dog breed name from the image URL and display it in the card!
*/

const dogBtn = document.getElementById("dogBtn");
const spinner = document.getElementById("spinner");
const dogBox = document.getElementById("dogBox");

dogBtn.addEventListener("click", async () => {
  spinner.style.display = "inline-block";
  dogBox.innerHTML = "";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    dogBox.innerHTML = `
      <div class="card mx-auto shadow" style="width: 18rem;">
        <img src="${data.message}" class="card-img-top" alt="A cute dog" />
        <div class="card-body">
          <p class="card-text">Here's a good doggo for you 🐶</p>
        </div>
      </div>
    `;
  } catch (error) {
    dogBox.innerHTML = `
      <div class="alert alert-danger">Failed to fetch a dog. Try again!</div>
    `;
  } finally {
    spinner.style.display = "none";
  }
});
