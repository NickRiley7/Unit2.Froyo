const userInputString = prompt(
    "Pick a flavor.", "Vanilla, Strawberry, Coffee,"
);

const stringArray = userInputString.split(",");

const froyoflavors = {
};

for (let i = 0; i < stringArray.length; i ++) {
    if (froyoflavors[stringArray[i]]) {
        (froyoflavors[stringArray[i]]++)
    } else {froyoflavors[stringArray[i]]=1}
}

console.table(froyoflavors)

