document.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById("updateButton").addEventListener("click", function() {
        var inputText = document.getElementById("textInput").value;
        document.getElementById("updatedSection").textContent = inputText || "Please name this Oshawott";
        document.getElementById("textInput").value = "";   
        
    });
    document.getElementById("textInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("updateButton").click();
        }
    });

    document.getElementById('modeSwitch').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('bg-dark', 'text-light');
            document.body.classList.add('bg-light', 'text-dark');

            let cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.remove('bg-custom-dark', 'text-light');
                card.classList.add('bg-custom-light', 'text-dark');
            });
    
            let table = document.querySelectorAll('.table');
            table.forEach(tbl => {
                tbl.classList.remove('table-dark');
                tbl.classList.add('table-light');
            });
            let listItems = document.querySelectorAll('.list-group-item');
            listItems.forEach(item => {
                item.classList.remove('bg-dark');
                item.classList.add('bg-light');
            });

            let btnGitHub = document.querySelector(".btn-outline-light");
            if (btnGitHub) {
                btnGitHub.classList.remove("btn-outline-light");
                btnGitHub.classList.add("btn-outline-dark");
            }
        } else {
            document.body.classList.remove('bg-light', 'text-dark');
            document.body.classList.add('bg-dark', 'text-light');
    
            let cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.remove('bg-custom-light', 'text-dark');
                card.classList.add('bg-custom-dark', 'text-light');
            });
    
            let table = document.querySelectorAll('.table');
            table.forEach(tbl => {
                tbl.classList.remove('table-light');
                tbl.classList.add('table-dark');
            });
    
            let listItems = document.querySelectorAll('.list-group-item');
            listItems.forEach(item => {
                item.classList.remove('bg-light');
                item.classList.add('bg-dark');
            });
    
            let btnGitHub = document.querySelector(".btn-outline-dark");
            if (btnGitHub) {
                btnGitHub.classList.remove("btn-outline-dark");
                btnGitHub.classList.add("btn-outline-light");
            }
        }
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
        listItem.classList.add('list-group-item', 'bg-dark', 'p-3');
        listItem.innerHTML = `
            <h5>${article.title}</h5>
            <p><strong>Source:</strong> ${article.source.name}</p>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
        `;
        newsList.appendChild(listItem);
    });
}


