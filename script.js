// Get the <ul> element
var parkingSlotsList = document.getElementById("parking-slots");

// Fetch the JSON data
fetch("location-data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(parkingSlots) {
    // Loop through the JSON data and create <li> elements
    parkingSlots.forEach(function(parkingSlot) {
      // Create <li> element
      var listItem = document.createElement("li");

      // Create the content for the <li> element
      var content = document.createTextNode(parkingSlot.name + " - " + parkingSlot.location);

      // Append the content to the <li> element
      listItem.appendChild(content);

      // Append the <li> element to the <ul> element
      parkingSlotsList.appendChild(listItem);
    });
  })
  .catch(function(error) {
    console.log("Error fetching JSON data:", error);
  });
