

import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;

    // add code here to find emails in the line 
}

