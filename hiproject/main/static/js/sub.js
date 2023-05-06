function lan_list(data)
{
    console.log("lan: ", data);
    const parentNode = document.getElementById('language_selecter');
    parentNode.innerHTML = ``;
    for(value in data){
        parentNode.innerHTML += `<option value="${data[value].language_id}">${data[value].name}</option>`;
    }
}