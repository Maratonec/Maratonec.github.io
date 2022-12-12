// Get the block of text
const textBlock = document.getElementById('text-block');
// Split the text into individual words
const words = textBlock.innerText.split(' ');
// Clear the text in the text block
textBlock.innerHTML = '';
// Loop through each word and create a span element for it
for (const word of words) {
    const span = document.createElement('span');
    span.innerText = word + ' ';

    // Set a mouseover event listener for the span element
    // to enlarge the text when the user hovers over it
    span.addEventListener('mouseover', () => {
        span.style.fontSize = '1.25em';
        span.style.transition = 'all 0.5s ease-in-out';
    });

    // Set a mouseout event listener for the span element
    // to return the text to its original size when the user
    // moves the cursor away
    span.addEventListener('mouseout', () => {
        span.style.fontSize = '1em';
        span.style.transition = 'all 0.5s ease-in-out';
    });

    // Add the span element to the text block
    textBlock.appendChild(span);

}