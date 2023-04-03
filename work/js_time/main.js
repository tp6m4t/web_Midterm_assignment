$(function(){
 show();
});

function setDate(){
    var a=$("input").val();
    let data=a.split('-');
    setMonthAndDay(data[0],data[1],data[2]);
    show();
    //$("#out").append($("input").val());
}

function show(){
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCoun=topic.length;
    let newDate=new Date;
    newDate.setTime(startDate.getTime());
    for(var i=0;i!=topicCoun;i++){
        $('#courseTable').append(
            "<tr>"+
            `<td>${i+1}</td>`+
            `<td>${newDate.toLocaleDateString()}</td>`+
            `<td>${topic[i]}</td>`+
            "</tr>"
        );
        newDate.setTime(newDate.getTime()+86400000*7)
    }
}

function New(){
    topic[topic.length]=$("input")[1].value;
    show();
}
