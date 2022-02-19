const axios = require('axios');

const getrepos = async (username, page, per_page) => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`);

        return repos.data.map((repo) => {
            return {
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                starts: repo.stargazers_count
            };
        }).sort((first, second) => second.stars - first.stars);
    } catch (error) {
        return [];
    }
}

module.exports = { getrepos };