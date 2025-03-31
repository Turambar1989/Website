const votingForm = document.querySelector(".voting-form");
const voteOptions = document.querySelector(".vote-options");
const userName = document.querySelector(".user-name");
const userID = document.querySelector(".user-id");
const voteResults = document.querySelector(".vote-results");

const validUserIds = new Map([
  ["Romek", "12345678"],
  ["Marta", "87654321"],
]);

const voteCounts = new Map();
voteCounts.set("Yes", 0); //// adding to map // przy set by było add
voteCounts.set("No", 0);
voteCounts.set("No Opinion", 0);

const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  /// główna logika
  const user = userName.value;
  const userPassword = userID.value;
  const select = voteOptions.value;
  if (validUserIds.has(user)) {
    if (validUserIds.get(user) === userPassword) {
      if (votedUsers.has(user)) {
        alert("You have already voted!!");
      } else {
        votedUsers.add(user);
        voteCounts.set(select, voteCounts.get(select) + 1); // set bo to dodaje do map
      }
    } else {
      alert("wrong password!");
    }
  } else {
    alert("You re NOT in the list");
  }

  updateResults();
};

const updateResults = () => {
  let output = "<h4>Results:</h4>";
  //   for (const [option, count] of voteCounts) {
  //     output += `${option}: ${count} votes<br>`;
  //     voteResults.innerHTML = output;
  //   }
  voteCounts.forEach((count, option) => {
    output += `${option}: ${count} votes<br>`;
  });
  voteResults.innerHTML = output;
};

votingForm.addEventListener("submit", voting);
