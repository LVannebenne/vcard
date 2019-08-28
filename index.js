#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const anim = require('chalk-animation');
const gradient = require('gradient-string');
const figlet = require('figlet');

const colors = [
    "black",
    "red",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "gray"
]

function rand() {
    let num = Math.floor(Math.random() * (+7 - +1)) + +1;
    return num;
}

let col = rand();

const text = [
    chalk.bold(gradient.atlas("          Lindsay Vannebenne")),
    chalk.italic(gradient.atlas("          Junior Web Developper @ BeCode.org \n")),
    chalk.keyword(colors[col])("   Email: ") + gradient.morning("lindsay.vannebenne@gmail.com"),
    chalk.keyword(colors[col])("LinkedIn: ") + gradient.morning("https://www.linkedin.com/in/lvannebenne"),
    chalk.keyword(colors[col])("  GitHub: ") + gradient.morning("https://github.com/LVannebenne"),
    chalk.keyword(colors[col])("     NPM: ") + gradient.morning("https://www.npmjs.com/~lvannebenne"),
    chalk.keyword(colors[col])(" Twitter: ") + gradient.morning("https://twitter.com/EmelseaDestiny")
]

const skills = [
    "# PHP"+"           # TeamWork",
    "  # HTML"+"          # Planning",
    "# CSS"+"           # Organisation",
    "  # JavaScript"+"    # Spelling",
    "# Laravel"+"       # HardWorking",
    "  # MySQL"+"         # IT & Tech",
    "# APIs"+"          # Tech watch",
    "  # Node.Js"+"       # Many other things..."
]

const jobs =  [ 
    "2013/2014 - Versatile Worker in a Nursing Home (Part-time)",
    "2016/2016 - Trainee in IT shop and repair @ BeWan, Seraing ",
    "2018/2019 - Trainer/Animator in 'Espace Public Numérique'(EPN) @ CPAS Flémalle",
    "2018/2019 - Administrative worker - Reception Desk @ CPAS Flémalle",
    "2019/2020 - Junior Web Developper @ BeCode Liège"

]

const training = [
    "2010/2011 - Secretary / Office Technician @ IPEPS Seraing",
    "2013/2013 - Certificate of basic management skills (Belgium)",
    "2014/2016 - IT Technician @ IPEPS Seraing (technique)",
    "2019/2020 - Junior Web Developper @ BeCode Liège"
]

console.log(boxen(text.reduce((pVal, cVal, i) => {
    return i == 0 ? cVal : pVal + '\n' + cVal;
}, ''), { padding: 2, borderStyle: 'round' }))


process.argv.forEach((val, index) => {
    if (val == "skills") {
        figlet('| Skills |', {
            font: 'Basic',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.error(err);
                return;
            }

            console.log(gradient.rainbow(data))
            console.log(boxen(skills.reduce((pVal, cVal, i) => {
            return i == 0 ? gradient.morning(cVal) : pVal + '\n' + gradient.morning(cVal);
            }, ''), { padding: 2, borderStyle: 'round' }))
        })
        
    }
    if (val == "jobs") {
        figlet('| Jobs |', {
            font: 'Basic',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.error(err);
                return;
            }

            console.log(gradient.rainbow(data))
            console.log(boxen(jobs.reduce((pVal, cVal, i) => {
            return i == 0 ? gradient.morning(cVal) : pVal + '\n' + gradient.morning(cVal);
            }, ''), { padding: 2, borderStyle: 'round' }))
        })
        
    }
    if (val == "training") {
        figlet('| Training |', {
            font: 'Basic',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.error(err);
                return;
            }

            console.log(gradient.rainbow(data))
            console.log(boxen(training.reduce((pVal, cVal, i) => {
            return i == 0 ? gradient.morning(cVal) : pVal + '\n' + gradient.morning(cVal);
            }, ''), { padding: 2, borderStyle: 'round' }))
        })
        
    }
});