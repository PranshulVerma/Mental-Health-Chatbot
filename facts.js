// Array of facts
const facts = [
  "Fact : 1 in 5 adults in the U.S. experience mental illness each year.",
  "Fact : Approximately 60% of people with mental health conditions don't seek help due to stigma.",
  "Fact : Studies show that chatbots can provide effective support for managing symptoms of anxiety and depression.",
  "Fact: Seeking professional help can greatly improve mental health outcomes.",
  "Fact: Self-care practices like regular exercise and mindfulness can boost mental well-being.",
  "Fact: Stigma remains a significant barrier to mental health treatment.",
  "Fact: Good nutrition plays a role in supporting mental health.",
  "Fact: Mental health is just as important as physical health for overall well-being.",
  "Fact: Early intervention can prevent many mental health conditions from worsening.",
  "Fact: Social support is crucial for managing mental health challenges."
  // Add more facts here
];

let currentFactIndex = 0;

// Function to display facts sequentially
function displayFactSequentially() {
  const factBox = document.getElementById("fact-box");
  const factList = document.getElementById("fact-list");

  // Get the current fact
  const currentFact = facts[currentFactIndex];

  // Set the fact box to display at the right corner
  factBox.style.left = "";
  factBox.style.top = "10px"; // Adjust the top value as needed
  factBox.style.right = "5px"; // Adjust the right value as needed

  // Display the fact in the fact box
  factList.innerHTML = `<li>${currentFact}</li>`;
  factBox.style.display = "block";

  // Smoothly fade in
  setTimeout(function () {
    factBox.style.opacity = 1;
  }, 0);

  // Automatically hide the fact box after 3 seconds (3000ms)
  setTimeout(function () {
    // Smoothly fade out
    factBox.style.opacity = 0;

    // Increment the current fact index and loop if it exceeds the array length
    currentFactIndex = (currentFactIndex + 1) % facts.length;

    // After 1 second (1000ms), display the next fact
    setTimeout(function () {
      displayFactSequentially();
    }, 5000);
  }, 10000);
}

// Call the function to start displaying facts
displayFactSequentially();
