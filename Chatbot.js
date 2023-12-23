var client_name;
function myfunc(){
    client_name=$("input")[0].value;
    if(client_name==''){
        alert("please type your name 😇");
    }
    else{
        move();
    }
    
}
function move() {
    $("#first-page").css("visibility","hidden");
    $("#box").css("background-color","wheat");
    $(".hidden").css("visibility","visible");
    $("#chat_box").html("<p> Hello 👋 "+client_name+"</p><p> How Are You ❓ </p><button class='ans' onclick='good()'>I am Good 😇 </button><button class='ans' onclick='notGood()'>NOT Good 😞 </button>");

}
function back(){
    window.location.reload();
}
function good(){
    $("#chat_box").append("<p> Very Nice 😇 </p>");
    $(".ans").removeAttr("onclick");
    move2();
}
function notGood(){
    $("#chat_box").append("<p> Oohh,hope you will be fine asap !! </p>");
   $(".ans").removeAttr("onclick");
   move2();
}
function move2(){
    $("#chat_box").append("<p>What are your intrest ?</p>");
    $("#chat_box").append("<button class='ans' onclick='query()'> Reading </button>");
    $("#chat_box").append("<button class='ans' onclick='query()'> Sports </button>");
    $("#chat_box").append("<button class='ans' onclick='query()'> Chatting </button>");
}
function back(){
    window.location.reload();
}
function reading(){
    $("#chat_box").append("<p> Oh! Nice 😇 </p>");
    $(".ans").removeAttr("onclick");
    move2();
}
function sports(){
    $("#chat_box").append("<p> Physically & Mentally fit 😇 </p>");
    $(".ans").removeAttr("onclick");
    move2();
}
function chatting(){
    $("#chat_box").append("<p> Go outdoor & get fresh air to keep you fit 😇 </p>");
    $(".ans").removeAttr("onclick");
    move2();
}

function query(){
    $("#chat_box").append("<textArea placeholder='please write your query here !!' style='height:60px;width:300px'></textArea>");
    $(".ans").removeAttr("onclick");
    $("#chat_box").append("<br><button class='ans submit' onclick='done()' >submit</button>")
}
var qur=$("textArea")[0].value;
function done(){
    $("#chat_box").append("<p>Thanks 🙏,For Contacting Us</p><p>Your query is recorded in our system 💻...Our team will reach you out soon ⏳ !!</p>");
}