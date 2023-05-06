function lan_list(data)
{
    console.log("lan: ", data);
    const parentNode = document.getElementById('language_selecter');
    for(value in data)
    {
        parentNode.innerHTML += `<option value="${data[value].language_id}">${data[value].name}</option>`;
    }
}

function voice_list(data)
{
    console.log("voices: ", data);
    const parentNode = document.getElementById('voice_selecter');
    for(value in data)
    {
        parentNode.innerHTML += `<option value="${data[value].voice_id}">${data[value].name}</option>`;
    }
}

function view_video(data)
{
    const parentNode = document.getElementById('res_video');
    for(value in data)
    {
        parentNode.innerHTML = `
        <video controls>
        <source src="https://example.com/videos/myvideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        
        <i>나의 입모양 AI 아바타</i>
                <video src="http://127.0.0.1:8000/static/images/1683362367569.mp4" auto controls width="500px">
                이 브라우저에서 지원하지 않는 영상입니다.
                </video>`;
    }
}

function downloadMP3(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        // Blob 객체 생성
        var blob = new Blob([this.response], {type: 'audio/mpeg'});
  
        // Blob 객체의 URL 생성
        var url = URL.createObjectURL(blob);
  
        // 오디오 요소 생성
        var audio = new Audio(url);
  
        // 오디오 재생
        audio.play();
      }
    };
    xhr.send();
  }
