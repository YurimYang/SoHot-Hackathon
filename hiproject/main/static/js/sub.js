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
