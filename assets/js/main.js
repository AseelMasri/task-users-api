async function getUsers(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users=await response.json();
    const result= users.map( function(users){
        return `
        <div class="userCompany">
        <h1> ID: ${users.id }</h1>
        <h2>Name: ${users.name}</h2>
        <p>Email: ${users.email}</p>
        <p>City: ${users.address.city}</p>
        <p>Phone: ${users.phone}</p>
        </div>
        `;
    }).join("");
    console.log(result);
    document.querySelector(".users").innerHTML = result;
   
}

getUsers();