// ==My Custom Mod Configuration==
// Easily change these variables to customize your element.
let custom_name = "ME BOMBOCLAAT"; // The display name of your element
let custom_color = "#ff00a0"; // The color using a hex code (e.g., "#RRGGBB")
let custom_behavior = behaviors.POWDER; // The element's behavior (e.g., behaviors.POWDER, behaviors.LIQUID, behaviors.SOLID, behaviors.GAS)
let custom_category = "BoredomV1.2"; // The category in the element picker
let custom_state = "powder"; // The physical state (e.g., "solid", "liquid", "gas", "powder")

// You can add simple reactions here (optional)
let custom_reactions = {
    "water": { "elem1": "poison", "elem2": null, "chance": 0.5 },
    "fire": { "elem1": "fire", "elem2": null, "chance": 0.05 }
};
// ==================================

// The core mod logic
elements.my_custom_element = {
    color: custom_color,
    behavior: custom_behavior,
    category: custom_category,
    state: custom_state,
    name: custom_name,
    reactions: custom_reactions,
   
    desc: "dont ignite this pls"
};


if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.my_custom_element = {
    "elem1": "color_water",
    "elem2": null
};

