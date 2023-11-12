'use strict'

fetch('https://www.themuse.com/api/public/jobs?page=1')
    .then(response => response.json())
    .then(data => {
        let jobList = document.getElementById('job-list');
        data.results.forEach(job => {
            let jobDiv = document.createElement('div');
            jobDiv.classList.add('job');
            jobDiv.innerHTML = ` <h2>${job.name}</h2><a href="${job.refs.landing_page}" target="_blank">Apply Now</a>`;
            jobList.appendChild(jobDiv);
        });
    })
    .catch(error => console.error('Error:', error));