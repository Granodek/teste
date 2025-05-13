import express from 'express'
import session from 'express-session'
import verificarAutenticacao from './public/js/autenticacao.js';

const host = "0.0.0.0";

const porta = 3000;

const app = express(); //app web

app.use(session({
    secret: "minhachave",
    resave: true,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 15,
        httpOnly: true
    }

}))
app.use(express.urlencoded({ extended: true}))
app.use(express.static('./public'));
app.use('/private', verificarAutenticacao, express.static('./private'));




app.get("/HOME.html", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\private\\HOME.html");
});

app.get("/HOME.css", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\private\\css\\styles.css");
});


app.get("/login.html", (req, res) => {
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\login.html");
});

app.get("/login.css", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\css\\login.css")
}
) 

app.get("/signup.html", (req, res) => {
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\signup.html");
});

app.get("/signup.css", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\css\\signup.css")
}
) 
app.post("/login", (req, res) =>{
//desestruturação javascript
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if(usuario == "Malzahar" && senha == "Iruli"){
        req.session.autenticado = true;
        res.redirect("/HOME.html");
    }else{
        res.redirect("/login.html");
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login.html");
})


app.get("/index.html", (req, res) =>{
    res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body id="divTabela" class="legal">
    <header>
        <button onclick="ggg()">Tempo bom</button>
        <button onclick="zzz()">Tempo ruim</button>
        <button onclick="troca()">Tabuada</button>
        <button onclick="troca3()">Login</button>
    </header>
        
        
    </body>
    <script src="./js/scriptPrime.js"></script>
    </html>`);
    res.end();
}
)


app.get("/style.css", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\css\\style.css")
}
) 
app.get("/scriptPrime.js", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\js\\scriptPrime.js")
}
) 
app.get("/OIP.jpg", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\OIP.jpg")
}
)
app.get("/OIP2.jpg", (req, res) =>{
    res.sendFile("C:\\aulas\\vs code\\liguagem de programação\\2 Bi\\aula 4\\src\\public\\OIP2.jpg")
}
)
app.get("/tabuada.html", (req, res) =>{
    res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body id="divtudo" class="legal">
        <h1 class="titulo">TABUADA</h1>
        <div ><button onclick="troca2()">Home</button></div>
        
        <label for="numero1">Insira um numero</label>
        <input id="numero1" type="number" name="numero1">
        <label for="numero2">Insira a quantidade</label>
        <input id="numero2" type="number" name="numero2">
        <button onclick="show()" type="submit">Enviar</button>
        
        
        <div><p id = "divnada"> </p></div></div>
        
        
        
    </body>
    <script src="./js/scriptPrime.js"></script>
    </html>`)
    res.end();
})


app.listen(porta, host, () => {
    console.log(`Servidor iniciado http://localhost:${porta}/index.html`)
});

// app.listen(porta, host, () =>{})

    //node --watch index.js para começar
    