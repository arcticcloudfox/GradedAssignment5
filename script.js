// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let document = window.document;
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value;
        let cargoLevel = document.querySelector("input[name=cargoMass").value;

        if (validateInput(pilot) === `Empty`|| validateInput(copilot) === `Empty` || validateInput(fuelLevel) === `Empty` || validateInput(cargoLevel) === `Empty`) {
            alert("All fields are required!");
        } else if (validateInput(pilot) === `Is a Number` || validateInput(copilot) === `Is a Number`) {
            alert("Please enter an alphabetical value for the names of the pilots!");
        } else if (validateInput(fuelLevel) === `Not a Number` || validateInput(cargoLevel) === `Not a Number`) {
            alert("Please enter a number for values of fuel and cargo levels!");
        } else {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            list.style.visibility = "visible";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
    
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let index = pickPlanet(listedPlanets);

        addDestinationInfo(document, index.name, index.diameter,index.star, index.distance, index.moons, index.image);
    })
    
 });