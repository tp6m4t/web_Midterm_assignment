//網頁載入後執行function
$(function(){
    //觸發input的click執行function
    var a;
    $("input").on("click",function(){
        //alert("Hi");//跳出對話框
        //log給網頁
        var b=Math.floor(Math.random()*$("li").length)
        while(a==b){
            b=Math.floor(Math.random()*$("li").length)
        }
        a=b;
        console.log(a+1);
        //randon()return 0~1 的小數含0不含1
        //floor 向下取整(高斯符號)
        $("h1").text($("li").eq(a).text());
        var img=$("img")
        img.attr('src',a+'.jpg');
        img.attr('hight','50%');
        img.attr('width','50%');
    })
})