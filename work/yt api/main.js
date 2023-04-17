let player;
let currentPlay=0;

function onYouTubeIframeAPIReady(){
    
    player=new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            autoplay:0,//是否自動撥放
            controls:0,//是否顯示控制項
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}
function onPlayerReady(event){
    $("#playbutton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event){
    console.log(currentPlay);
    if((Boolean(playTime[currentPlay][1])!=false && Math.floor(player.getCurrentTime())>=playTime[currentPlay][1])
    || (player.getPlayerState()==0 && Math.floor(player.getCurrentTime())!=0)){
        
        console.log("change");
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }
        else{
            currentPlay=0;
            if(loop==false)
                player.cueVideoById({
                    videoId:playList[currentPlay],
                    startSeconds:playTime[currentPlay][0],
                    endSeconds:playTime[currentPlay][1],
                    suggestedQuality:"large"
                });
            else{
                player.loadVideoById({
                    videoId:playList[currentPlay],
                    startSeconds:playTime[currentPlay][0],
                    endSeconds:playTime[currentPlay][1],
                    suggestedQuality:"large"
                });
            }
        }
    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
        
    }
}

let loop=true;

function loop_w(){
    loop=!loop;
}