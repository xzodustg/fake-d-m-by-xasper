//LASTEST VERSION 30/11/2022
//1:เปิด Console Discord
//2:ปิดไมค์ ปิดหู
//3:ก็อบบรรทัดที่ 6 - 18 วางใน Console
//4:เปิดไมค์เปิดหู Enjoyyy!
var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("found mute/deafen");
            data = data.replace('"self_mute":false', 'NiceOneDiscord');
            console.log("faked - xasper.gm");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
//ใช้ดีๆนะของมันแรง โดนอะไรสกิดนิดหน่อยดิสระเบิดเลยนะ #ห้ามกดรันนะจ๊ะ
//contact me : xasper@admin.support 
//can call me : xasper