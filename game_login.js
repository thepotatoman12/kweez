function adduser(){
    steak1_name = document.getElementById("steak1_name").value; 
    steak2_name = document.getElementById("steak2_name").value; 
    localStorage.setItem("steak1_name", steak1_name);
    localStorage.setItem("steak2_name", steak2_name);
    window.location.replace("game_page.html");
}
