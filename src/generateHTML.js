function insertCards(team){
    const html = [];
    html.push(team.filter(member => member.getRole()==="Manager").map(manager=>buildManagerCard(manager)))
    team.filter(member => member.getRole()==="Engineer").map(engineer=>buildEngineerCard(engineer))
    team.filter(member => member.getRole()==="Intern").map(intern=>buildInternCard(intern))
    return html.join("")
}
function buildManagerCard(manager){
    return `<div class="card">
    <div class="card-header">${manager.getName()}</div>
     <div class="card-body"></div>
     <p class = "card-text">${manager.getId()}</p>
     <p class = "card-text"></p>
     <p class = "card-text"></p>
     <p class = "card-text"></p>
 </div>`
}




function buildFrame(team){
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>
    <main class="container">
        <div class="card">
           <div class="card-header"></div>
            <div class="card-body"></div>
            <p class = "card-text"></p>
            <p class = "card-text"></p>
            <p class = "card-text"></p>
            <p class = "card-text"></p>
        </div>
    </main>
</body>
</html>`
}
module.exports = buildFrame 