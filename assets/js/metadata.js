const apiUrl = 'https://api.example.com/data';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('API response:', data);
        // Verarbeite die API-Daten hier
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
