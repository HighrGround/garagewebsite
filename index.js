document.addEventListener("DOMContentLoaded", function() {
    // Get the ul element
    var carList = document.getElementById("car_list");
    
    // Loop from 2 to 9 to create listing elements
    for (var i = 2; i <= 9; i++) {
        // Create the list item and anchor elements
        var listItem = document.createElement("li");
        var anchor = document.createElement("a");
        
        // Set the href attribute of the anchor element
        anchor.href = "listings/listing - Copy (" + i + ").html";
        
        // Set the innerHTML of the anchor element
        anchor.innerHTML = "Listing " + i;
        
        // Append the anchor element to the list item
        listItem.appendChild(anchor);
        
        // Append the list item to the ul element
        carList.appendChild(listItem);
    }
});
