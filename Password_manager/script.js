let x;
let y;
let z;
let content;

const history = []

function save(){
    x = document.getElementById("website").value;
    y = document.getElementById("username").value;
    z = document.getElementById("password").value;

    console.log(x);
    console.log(y);
    console.log(z);

    if(x === '')  alert("Enter the website name:");
    if(y === '')  alert("Enter the Username name:");
    if(z === '')  alert("Enter the Password:");

    // list = [];

    // list.push(x);
    // list.push(y);
    // list.push(z);

    content = 
    `
    <tr>
		<td>Website</td>
		<td>Username</td>
		<td>Password</td>
	</tr>
    `
    // content +=
    // `
    // <tr>
	// 	<td>${list[0]}</td>
	// 	<td>${list[1]}</td>
	// 	<td>${list[2]}</td>
	// </tr>
    // `
    // document.getElementById('para').innerHTML = content;
    
    history.push({
        first:x,
        second:y,
        third:z
    });

    for(let i=0;i<history.length;i++)
    {
        const item = history[i];

        content += 
        `
        <tr>
		<td>${item.first}</td>
		<td>${item.second}</td>
		<td>${item.third}</td>
	    </tr>
        `
        document.getElementById('para').innerHTML = content;
    }
}

function flush(){
    x = "";
    y = "";
    z = "";

    document.getElementById('website').value = x;
    document.getElementById('username').value = y;
    document.getElementById('password').value = z;

}

