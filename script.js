// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        
        response.json().then( function(json) {
           console.log(json);
            const div = document.getElementById("container");
            let astronautHTML = "";

            json.sort((a,b) => (a.hoursInSpace >= b.hoursInSpace ? 1 : -1));
            for (let i = 0; i < json.length; i++) {
                astronautHTML += `
                    <div class="astronaut">
                        <div class="bio ${json[i].active ? "active" : "" }">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active:${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>`
            }

            astronautHTML += `
            <div><h3>Astronaut Count: ${json.length}</h3></div> `

            div.innerHTML = astronautHTML;
        });
     });
    });
