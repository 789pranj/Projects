const solve = (char) => {
    let display = document.getElementById("display");
    display.value += char;
}

const Clear = () =>{
    document.getElementById("display").value = "";
}

const backspace = () => {
    let dispaly = document.getElementById("display");
    dispaly.value = dispaly.value.slice(0,-1);
}

const result = () => {
    let dispaly = document.getElementById("display");
    let expression = dispaly.value;
    try{
        dispaly.value = eval(expression);
    }
    catch(err){
        dispaly.value = "";
        let error = `Error! ${expression} is not valid experssion.`;
        document.getElementById("error").innerText = error; 
    }
}