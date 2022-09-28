
import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;
let emailCount = 0;

// <local>@<domain>
const email_re = /[A-Za-z0-9._%+-]+@([a-z0-9-]+[.])+[a-z]+/;
// first part of email address - [A-Z0-9._%+-] can be letters/numbers/symbols
// followed by "@" symbol - @([a-z0-9-]+[.]) followed by letters/numbers/certain symbols, followed by "."  ...
// last part of the email - [a-z]+ final part of address

const softwire = /@(<softwire.com>\w+)/mg;
//const softwire = /@([<softwire.com>]).*?\1/g;


text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);
console.log(`Processed ${emailCount} emails.`);

// extract information from one line
// and update global variables
function processOneLine(line, email_search) {
    // example of gathering information

    lineCount++;
    email_search = line.search(email_re);


    // add code here to find emails in the line 
    if (email_search) {
        emailCount++;
        console.log(email_search);
    }

    for (const match of line.matchAll(softwire)) {
        console.log(`Processed ${match.groups.softwire.com}`);
    }
}
