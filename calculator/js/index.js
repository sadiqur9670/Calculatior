$("button").click(function(){
    $(".card").slideToggle();
});

function insartNumber(number){
    var exsitingnumber= $("#result").val();
    $("#result").val(exsitingnumber+number);

}

function clearAll(){
    $("#result").val("");
}
function calculate(){
   var result= eval($("#result").val());
    $("#result").val(result);
}
function persent(){
    var persent= ($("#result").val())/100;
    $("#result").val(persent);
}
function deleteNumber(){
    var presntValu= $("#result").val();
    if(presntValu!=''){
        $("#result").val(presntValu.slice(0,-1));
    }
}