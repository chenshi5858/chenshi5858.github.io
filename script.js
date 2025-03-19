document.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById("updateButton").addEventListener("click", function() {
        var inputText = document.getElementById("textInput").value;
        document.getElementById("updatedSection").textContent = inputText || "Please name this Oshawott";
        document.getElementById("textInput").value = "";   
        
    });

    getAPIContent();

    
})

async function getAPIContent(){
    const apiKey = "fe4a7c898fc84809a0e03c463f643127";
    const category = "technology";

    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;

    await fetch(url)
            .then(response => response.json())
            .then(data => {
                const topArticles = data.articles.slice(0, 10);
                displayNews(topArticles);
            })
            .catch(error => console.error('Error fetching news:', error));
}

function displayNews(articles) {
    const newsList = document.querySelector('.latest_news');
    newsList.innerHTML = ''; 

    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'bg-dark');
        listItem.innerHTML = `
            <h5>${article.title}</h5>
            <p><strong>Source:</strong> ${article.source.name}</p>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
        `;
        newsList.appendChild(listItem);
    });
}


