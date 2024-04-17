const solve = (char) => {
    let display = document.getElementById("display");
    display.value += char;
    clearError();
}

const Clear = () =>{
    document.getElementById("display").value = "";
    clearError();
}

const backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
    clearError();
}

const result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        display.value = eval(expression);
    } catch(err) {
        display.value = "";
        let error = `Error! ${expression} is not a valid expression.`;
        document.getElementById("error").innerText = error; 
    }
}

const clearError = () => {
    document.getElementById("error").innerText = "";
}

document.getElementById("display").addEventListener("input", clearError);

// Event listeners for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = /[0-9+\-*/.%=]|Backspace|Enter/;
    if (validKeys.test(key)) {
        event.preventDefault(); 
        if (key === "Enter") {
            result();
        } else if (key === "Backspace") {
            backspace();
        } else {
            solve(key);
        }
    }
});
