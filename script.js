'use strict';

function getRepo(handle) {
    fetch('https://api.github.com/users/' + handle + '/repos')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);

    $("ul").empty();

    if (responseJson.code == 404) {
        $("div").append(`<h2> User is not found. Please try again. </h2>`)
    } else {
        for (let i = 0; i < responseJson.length; i++) {
            $("ul").append(`<li> Repo Name: ${responseJson[i].name} URL: ${responseJson[i].url}</li>`)
        }
    }

}

// WHY DOESNT THIS WORK!!!?
function resetForm() {
    $('form').submit(event => {
        //event.preventDefault();
        $("ul").empty();
    });
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const handle = $('#js-handle').val();

        const responseJson = getRepo(handle);

    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    resetForm();
});