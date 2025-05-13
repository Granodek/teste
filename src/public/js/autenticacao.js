export default function verificarAutenticacao(req,res,next){
    if(req.session.autenticado){
        next();
    }else{
        res.redirect("/login.html");
    }
}