// custom_gas_mod.js

// Define the custom volatile gas element
elements.Hydroxygen = {
    color: "#ffdd55", // A yellowish color for visibility
    behavior: behaviors.GAS, // Makes the element behave as a gas
    category: "gases", // Places it in a custom or existing category
    state: "gas",
    density: 5.5, // Less dense than air (air is 1)
    reactions: {
        "fire": { // Reaction when touching "fire"
            elem1: null, // The gas disappears
            elem2: "explosion", // The fire turns into an explosion
            temp2: 500, // Optional: requires a certain temperature for the reaction (fire is hot enough)
        },
        "electric": { // Reaction when touching "electric" (electric arc)
            elem1: null, // The gas disappears
            elem2: "explosion", // The electric arc turns into an explosion
        },
        "oxygen": { // Optional: reaction to air/oxygen to make it more realistic
            chance: 0.1, // Small chance per tick for a minor reaction
            elem1: "fire",
        },
    },
    burn: 0.9, // High flammability (0 to 100, can also use numbers for chance)
    burnInto: "fire", // The element it turns into when it burns
    explosive: 0.5, // Sets an explosion value when specific conditions are met
};
