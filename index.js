//Javascript for simple GET request to Dog API
let breed = '';


//function to generate DOM
function generateHtml(responseJson){
    if (responseJson.status === "success"){
    $('.results').removeClass("hidden");
    $('.results').html(`<h2>Image</h2>`);
    $('.results').append(`<img src="${responseJson.message}" alt="Random ${breed} Photo"> <br> <p>This is a photo of a ${breed}.</p>`);
    }else {
        $('.results').removeClass("hidden");
        $('.results').html(`<h2>${responseJson.status}</h2><p>${responseJson.message}</p>`);
    }

}

//function to send GET request
function getDogPhoto(){
    breed = $('.js-form input[name="breed"]').val();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => generateHtml(responseJson))
        .catch(error => alert('Something went wrong.  Please try again later.'))
}

//function to watch form submissions
function watchForm(){
    console.log('Page Loaded, watching form');
    $('.js-form').submit(event => {
        event.preventDefault();
        getDogPhoto();
    })
}

//ready function
$(watchForm());