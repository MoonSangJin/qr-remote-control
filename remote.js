var RequestParam = function() {  
    this.get = function(name) {  
        var rtnval = '';  
        var nowAddress = unescape(location.href);  
        var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,  
                nowAddress.length)).split('&');  
        for (var i = 0; i < parameters.length; i++) {  
            var varName = parameters[i].split('=')[0];  
            if (varName.toUpperCase() == name.toUpperCase()) {  
                rtnval = parameters[i].split('=')[1];  
                break;  
            }  
        }  
        return rtnval;  
    }  
}  
var requestParam = new RequestParam(); //ip주소 가져오기, qr코드 찍는 스마트폰과 pc는 같은 wifi에 연결되어있어야함//

var webSocket = new WebSocket("ws://"+requestParam.get("ip")+":9220");



// set --

function remoteMoveRel( relX, relY )

{

    webSocket.send("m " + relX + " " + relY);

}



function remoteClick()

{

    webSocket.send("c");

}



function remoteTyping( str )

{

    webSocket.send("t " + str);

}



function remoteHotkey( ...arg )

{

    webSocket.send("h " + arg.join(" "));

}



function remoteScreenshot()

{

    webSocket.send("ss");

}



/*

m : move

c : click

h : hotkey

t : typing

ss : screenshot

*/


function disconnect(){

    webSocket.close();
}

