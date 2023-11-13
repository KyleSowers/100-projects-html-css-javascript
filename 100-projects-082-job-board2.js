'use strict'

fetch('https://my-json-server.typicode.com/SenghyunNa-web/jobboard/jobs')
    .then(response => response.json())
    .then(data => {
        let jobList = document.getElementById('job-list');
        data.forEach(job => {
            let jobDiv = document.createElement('div');
            jobDiv.classList.add('job');
            jobDiv.innerHTML = ` <h2>${job.title}</h2><p>${job.location}</p><a href="${job.url}" target="_blank">Apply Now</a>`;
            jobList.appendChild(jobDiv);
        });
    })
    .catch(error => console.error('Error:', error));