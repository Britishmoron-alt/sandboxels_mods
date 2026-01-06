// Bob-omb mod for Sandboxels
// Acts like a human for 3 seconds, then explodes.

elements.bobomb = {
    color: "#000000", // Black color for the Bob-omb body
    color2: "#ff0000", // Red color for the fuse/feet
    behavior: behaviors.POWDER, // Start with powder behavior for placement
    category: "weapons",
    state: "solid",
    density: 1200,
    conduct: 1,
    tick: function(pixel) {
        // Initialize the timer and human behavior on first tick
        if (pixel.timer === undefined) {
            pixel.timer = 0;
            // Set the behavior to act like a human (walking, etc.)
            // The actual "human" behavior is complex, so we approximate
            // using a combination of movement and random walking attempts.
            // A simple way to approximate the "walk" is to use tryMove to move horizontally and fall.
            // Or you can try to emulate a simpler version of the built-in 'human' logic
            pixel.behavior = behaviors.MOVING_SOLID; // A basic moving solid behavior
        }

        pixel.timer++;
        
        // 3 seconds = roughly 90 ticks (game runs at ~30 TPS)
        if (pixel.timer >= 90) {
            // Explode after 3 seconds
            changePixel(pixel, "explosion");
            return;
        }

        // Add human-like movement: random horizontal movement and trying to move down
        if (pixel.timer % 5 === 0) { // Check every few ticks for movement
            if (Math.random() < 0.5) {
                tryMove(pixel, pixel.x + 1, pixel.y);
            } else {
                tryMove(pixel, pixel.x - 1, pixel.y);
            }
        }
        tryMove(pixel, pixel.x, pixel.y + 1); // Gravity/falling

        // Visual cue: flash red near explosion time
        if (pixel.timer >= 60 && pixel.timer % 10 < 5) {
            pixel.color = "#ff0000";
        } else {
            pixel.color = "#000000";
        }
    }
};

// Add reaction so it ignites if touched by fire or sparks
if (!elements.fire.reactions) elements.fire.reactions = {};
elements.fire.reactions.bobomb = { elem2: "explosion" };
if (!elements.spark.reactions) elements.spark.reactions = {};
elements.spark.reactions.bobomb = { elem2: "explosion" };
