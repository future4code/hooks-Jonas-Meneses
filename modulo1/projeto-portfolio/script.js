let menu = () =>{
    let botao = document.getElementById("botao")
    let menus = document.getElementById("containerLinks")
    
    if(menus.style.width === "80%"){
        menus.style.width = "0%"
        console.log("fechou")
    }else{
        menus.style.width = "80%"
        console.log("abriu")
    }
}