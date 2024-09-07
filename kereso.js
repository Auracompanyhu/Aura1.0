
    function toggleSearch() {
        var searchForm = document.getElementById('search-form');
        if (searchForm.style.display === 'none') {
            searchForm.style.display = 'block';
        } else {
            searchForm.style.display = 'none';
        }
    }

    function performSearch() {
        var query = document.getElementById('search-input').value;
        if (query) {
            // Redirect or perform search logic here
            // For example, redirect to a search results page
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    }

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

