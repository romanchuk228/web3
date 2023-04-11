let switchMode = document.getElementById("switch");

switchMode.onclick = function () {
    let theme = document.getElementById("dark");
    
    if (theme.getAttribute("href") == "style.css"){
        theme.href = "styledark.css";
    }
    else{
        theme.href = "style.css";
    }
}
