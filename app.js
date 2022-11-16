
//let urlText = 'http://www.omdbapi.com/?apikey=f5773ed'

//http://www.omdbapi.com/?apikey=23daade9

//let urlPoster = 'http://img.omdbapi.com/?apikey=f5773ed'


const getSearchText = () =>{
    const submit = document.getElementById('submit');

    submit.addEventListener('click', (e)=>{
        e.preventDefault();

        const movieSearchText = document.getElementById('movieSearchTitle').value ? document.getElementById('movieSearchTitle').value : false;
        console.log(movieSearchText);
    });
};

getSearchText();



const testApi = async () =>{
    const resultText = await fetch('http://www.omdbapi.com/?t=harry&type=movie&apikey=23daade9', {
        method: 'GET',
    });

    let resultJson;
    
    if(resultText.ok){
        resultJson = await resultText.json();
        console.log(resultJson);
        console.log(resultJson.Director);
    }
}

testApi();



