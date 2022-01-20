function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#DBD0CC'
        
    }
    else if( hora >= 12 && hora < 18){
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#CD7B55'
    }
    else{
        img.src = 'imagens/foto-noite.png'
        document.body.style.background ='#13244F'
    }
}