const text = "Regex is powerful, and global matching is awesome. Global regex is global.";

// Using 'g' flag for global search
const regex = /global/gi;

// Finding all matches in the text
const matches = text.match(regex);

console.log(matches);
