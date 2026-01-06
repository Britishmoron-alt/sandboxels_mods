// human_bomb.js
elements.human_bomb = {
    color: "#ff0000", // Red color to signify it's a bomb
    behavior: behaviors.POWDER, // Starts as a powder for easy placement
    category: "special", // Appears in the "special" category
    state: "solid", // Initial state
    density: 1500, // Same density as a human
    // Custom tick function to manage the countdown and explosion
    tick: function(pixel) {
        if (pixel.count === undefined) {
            pixel.count = 0; // Initialize a counter for the pixel
        }
        pixel.count++; // Increment the counter each frame (tick)

        // After around 3 seconds (approx 90 ticks)
        if (pixel.count >= 90) { 
            // Change the element to "explosion"
            pixel.element = "explosion"; 
            // The game will automatically handle the explosion behavior
        }
        
        // Optional: Make it act a bit more "human-like" or mobile during the countdown
        // You can add simple movement logic here, e.g., to make it fall or move slightly
        // Example: Try to move down like a powder/solid
        if (pixel.count < 90) {
           if (tryMove(pixel, pixel.x, pixel.y + 1)) {
            // Moved down
           }
        }
    },
    // Optional: add a description
    description: "Acts like a human then explodes after 3 seconds.", 
    reactions: {
        // Inherit or add specific human reactions if desired (e.g. eating food)
    }
};
