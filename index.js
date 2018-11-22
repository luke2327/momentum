console.log('JS running!');

function viewInfo(name, age) {
    console.log(`Hello ${name} you are ${age}.`);
    return {
        name: name,
        age: age,
    }
}

const choi = viewInfo('Choi', 20);
console.log(choi);
console.log(console);
console.log(document);