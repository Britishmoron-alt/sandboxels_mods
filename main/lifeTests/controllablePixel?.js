// Register keyboard event listeners globally once
if (!window.wasd_keys) {
    window.wasd_keys = {};
    window.addEventListener('keydown', function(e) {
        if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
            window.wasd_keys[e.code] = true;
        }
    });
    window.addEventListener('keyup', function(e) {
        if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
            window.wasd_keys[e.code] = false;
        }
    });
}

// Define the new element
elements.controllable_life = {
    color: "#ff00ff", // Magenta color
    state: "solid",
    category: "life",
    density: 1000,
    behavior: behaviors.POWDER, // Start with a basic behavior
    tick: function(pixel) {
        // Only run logic if the game is not paused (optional, depends on preference)
        if (paused) return;

        let moved = false;
        // Check for WASD input and move the pixel
        // The movement logic needs to interact with the game's physics/pixel grid
        // This is a simplified example of how you might attempt movement:

        // Check 'W' for up movement
        if (window.wasd_keys['KeyW']) {
            if (tryMove(pixel, 0, -1)) { moved = true; }
        }
        // Check 'S' for down movement
        if (window.wasd_keys['KeyS']) {
            if (tryMove(pixel, 0, 1)) { moved = true; }
        }
        // Check 'A' for left movement
        if (window.wasd_keys['KeyA']) {
            if (tryMove(pixel, -1, 0)) { moved = true; }
        }
        // Check 'D' for right movement
        if (window.wasd_keys['KeyD']) {
            if (tryMove(pixel, 1, 0)) { moved = true; }
        }

        // If the pixel didn't move via WASD, let its default behavior run (e.g., fall)
        if (!moved && elements.controllable_life.behavior) {
            elements.controllable_life.behavior(pixel);
        }
    }
};
