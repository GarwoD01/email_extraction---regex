

import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// <local>@<domain>

// example of information gathered
let lineCount = 0;
let emailCount = 0;

let emails = ["@softwire.com", "@corndel.com", "@hotmail.co.uk", "@kiwimail.co.nz", "@gmail.com"];

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);

console.log(`Processed ${emailCount} emails.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    
    lineCount++;

    //console.log(line)
    // add code here to find emails in the line 
    for (let i = 0; i <= line.length; i++) {
        if(line.substring(i, line.length) == "@softwire.com"){
            emailCount++;
        }
        if(line.substring(i, line.length) == "@corndel.com"){
            emailCount++;
        }
    }
}
