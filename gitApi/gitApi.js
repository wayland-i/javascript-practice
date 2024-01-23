// Octokit.js
// https://github.com/octokit/core.js#readme
// Now you can use the Octokit object in your code

// import { Octokit } from '../node_modules/@octokit/rest';



// const octokit = new Octokit({
//     auth: 'ians-api-git-key'
// })


// await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
//     owner: 'OWNER',
//     repo: 'REPO',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })

import config from './config';


console.log("hello")

// Replace 'your-api-endpoint' with the actual URL you want to fetch data from
// const apiUrl = 'https://restcountries.com/v3.1/name/deutschland';

// // Make a GET request using fetch
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data[0].name.common))

const gitUrl = 'https://api.github.com/users/repos'

fetch(gitUrl, {
    method: 'GET',
    headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
    },
})
    .then(response => response.json())
    .then(data => console.log(data))