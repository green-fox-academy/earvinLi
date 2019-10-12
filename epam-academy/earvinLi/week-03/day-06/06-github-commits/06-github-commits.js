'use strict';

const getRepos = async () => {
  // GitHub Auth Headers
  const gitHubAuthHeaders = new Headers();
  gitHubAuthHeaders.set('Authorization', `Basic ${btoa(`earvinLi:9bc873a59915b665ca2a8ef161bfb416cc03373f`)}`);

  // Fetch repos back
  const reposJSON = await fetch('https://api.github.com/orgs/green-fox-academy/repos', { headers: gitHubAuthHeaders });
  const repos = await reposJSON.json();

  // We only need repo names for the following COMMIT call
  const repoNames = [];
  repos.forEach((repo) => repoNames.push(repo.name));

  // Elements to manipulate
  const mainTitle = document.getElementById('mainTitle');
  const getRepoButton = document.getElementById('getRepoButton');
  const tableBody = document.getElementById('tableBody');

  // Work with getRepoButton
  getRepoButton.classList.remove('hidden');
  getRepoButton.addEventListener('click', async () => {
    const currentRepoName = getRepoName().next().value;

    // Fill the main title with a repo name
    mainTitle.innerText = `Commit Messages of ${currentRepoName}`;

    // Fetch commits back
    const fetchedCommits = await fetchCommits(currentRepoName);

    // Build the table body
    return buildTableBody(fetchedCommits);
  });

  // Helper generator
  function* getRepoName() {
    while (repoNames.length) {
      yield repoNames.shift();
    }
  }

  // Function to fetch commits back
  const fetchCommits = async (repoName) => {
    const commitsJSON = await fetch(`https://api.github.com/repos/green-fox-academy/${repoName}/commits`, { headers: gitHubAuthHeaders });
    const commits = await commitsJSON.json();

    return commits;
  };

  // Function to build the table body
  const buildTableBody = (data) => {
    tableBody.innerHTML = '';
    data.forEach((commit) => {
      const tempTableRow = document.createElement('tr');
      const timeRow = `<td>${commit.commit.author.date}</td>`;
      const messageRow = `<td>${commit.commit.message}</td>`;
      const authorRow = `<td>by ${commit.commit.author.name}</td>`;

      tempTableRow.innerHTML += timeRow;
      tempTableRow.innerHTML += messageRow;
      tempTableRow.innerHTML += authorRow;
      tableBody.appendChild(tempTableRow);
    });
  };
};

getRepos();
