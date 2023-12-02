const apiUrlMetadata = 'https://parcaster-2ff51b8db57e.herokuapp.com/metadata';

async function getMetadata(){
    const response = await fetch(apiUrlMetadata);
    const metadata = await response.json();
    console.log(metadata);
}

export { getMetadata };
