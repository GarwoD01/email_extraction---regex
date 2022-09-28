
import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let domains = {};
let lineCount = 0;
let emailCount = 0;

// <local>@<domain>
const email_re = /[A-Za-z0-9._%+-]+@([A-Za-z0-9]+[.])+[a-z]+/;
// first part of email address - [A-Z0-9._%+-] can be letters/numbers/symbols
// followed by "@" symbol - @([a-z0-9-]+[.]) followed by letters/numbers/certain symbols, followed by "."  ...
// last part of the email - [a-z]+ final part of address

// ([A-Za-z0-9._%+-])+@((?:[A-Za-z0-9]+[.]))+[a-z]+

const all_domains = /[A-Za-z0-9._%+-]+@+(?<domain>\w+)+[.]+[a-z]+/mg;

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);
console.log(`Processed ${emailCount} emails.`);
console.log(domains);

fs.writeFileSync("domains.txt", JSON.stringify(domains), 'utf8');

// extract information from one line
// and update global variables
function processOneLine(line, email_search) {
    // example of gathering information
    lineCount++;
    email_search = line.search(email_re);

    // add code here to find emails in the line 
    if (email_search) {
        emailCount++;
        //console.log(email_search);
    }

    for (const match of line.matchAll(all_domains)) {
        //console.log(`Processed ${match.groups.domain} domain.`);
        domains[match.groups.domain] ||= 0;
        domains[match.groups.domain]++;
    }
}
