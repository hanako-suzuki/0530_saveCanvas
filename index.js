const medias = {
    audio: false,
    video: {
        facingMode: {
            exact: "environment"
        }
    }
};
const video = document.getElementById("video");
video.autoplay = true;
video.muted = true;
video.playsInline = true;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const saveButton = document.getElementById('saveButton');

// get IP address
const script = document.createElement('script');
script.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(script);
document.body.removeChild(script);
function callback(data) {
    console.log(data.ip);
    const ip = data.ip;
    console.log('your ip:', ip);

    const drawImage = new Image();
    drawImage.src = 'test_input.png'
    drawImage.onload = function(){
        ctx.drawImage(drawImage, 0, 0);
    };

    saveButton.addEventListener('click', () => {
        saveCanvas(canvas, String(Date.now()) + '.png');
    });
}



function saveCanvas(canvas, fileName) {
    // リンク要素を作成し、画像データを設定します
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = fileName;

    // クリックイベントを発生させてリンクをクリックします
    link.click();
}

function getIP(){
    fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json => {
        const ip = json.ip;
        console.log(json.ip);
        return ip;
    })
}