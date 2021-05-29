function calculateLevenshteinDistance(firstString, secondString) {
    var D = [];

    for (let i = 0; i < firstString.length + 1; i++) {                
        D[i] = new Array(secondString.length);
        D[i][0] = i;
    }

    for (let j = 1; j < secondString.length + 1; j++) {        
        D[0][j] = j;
    }

    for (let i = 1; i < firstString.length + 1; i++) {
        for (let j = 1; j < secondString.length + 1; j++) {
            if (firstString[i - 1] == secondString[j - 1]) {
                D[i][j] = D[i - 1][j - 1];
            } else {
                D[i][j] = Math.min(
                    D[i - 1][j] + 1,
                    D[i][j - 1] + 1,
                    D[i - 1][j - 1] + 1
                );
            }
        }
    }        

    return D[firstString.length][secondString.length];
}

function showLevenshteinDistance() {
    const firstString = document.getElementById('first-string').value;
    const secondtString = document.getElementById('second-string').value;
    const result = calculateLevenshteinDistance(firstString, secondtString);
    const outputText = document.getElementById('levenshtein-distance');
    outputText.innerText = 'Расстояние Левенштейна: ' + result;
}

function main() {
    const calculationButton = document.getElementById('count-Levenshtein-distance');        
    calculationButton.addEventListener('click', showLevenshteinDistance);
}

main();