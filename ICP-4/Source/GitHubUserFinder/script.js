function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    console.log(username);
    $.ajax({
        "url": "https://api.github.com/users/" +user,
        type: "GET",
        dataType: 'json',
    }).done(function(data){
        showUser(data);
    }).fail(function(){
        console.log("ERROR!! SOMETHING WRONG");
        noSuchUser(user);
    });
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    var giturl='https://github.com/'+user;
    //assigning element by id to the respective parameters
    document.getElementById('gitimage').src=user.avatar_url;
    document.getElementById('gitname').innerText=user.name;
    document.getElementById('gitid').innerText=user.id;
    document.getElementById('giturl').href=user.url;
    document.getElementById('giturl').innerText=user.html_url;
    document.getElementById('gitrepo').innerText=user.public_repos;
    document.getElementById('gitgist').innerText=user.public_gists;
    document.getElementById('gitcreated').innerText=user.created_at;
    document.getElementById('gitupdated').innerText=user.updated_at;
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    let data;
    if(data.message === "Not Found" || username === '') {
        alert("NOT FOUND!!");
    }
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which === 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
