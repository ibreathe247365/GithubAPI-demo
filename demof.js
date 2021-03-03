function requestUserRepos(org, n) {
    j = 0;
    flag=true;
    while (flag) {
    j = j + 1;
    xhr = new XMLHttpRequest();
    url = `https://api.github.com/users/${org}/repos?per_page=100&page=${j}`;
    xhr.open("GET", url, true);
    xhr.onload = function () {
      // Parse API data into JSON
        const data = JSON.parse(this.response);
      // Log the response
        console.log(data);
        if (data.length != 0) {
        // Loop over each object in data array
        for (let i in data) {
          // Log the repo name
            console.log("Repo:", data[i].name);
          // Log the repo description
            console.log("Description:", data[i].description);
          // Log the repo url
            console.log("URL:", data[i].html_url);
          // Add a separator between each repo
            console.log("=========================");
            if (i > n) {
            break;
        }
        }
    } else {
        flag=false;
    }
    };
    // Send the request to the server
    xhr.send();
    
}
}

requestUserRepos("facebook", String(n));
