const apiUrlMetadata = 'https://parcaster-2ff51b8db57e.herokuapp.com/metadata';

async function getMetadata(){
    const response = await fetch(apiUrlMetadata, {mode: "no-cors"});
    const metadata = await resopnse.json();
    console.log(metadata);
}
getMetadata();
