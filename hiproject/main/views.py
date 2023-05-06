from django.shortcuts import render,redirect
from main.models import Picture, Song


# Create your views here.
def main(request):
    return render(request, 'main.html')

def sub_uc_02(request):
    return render(request, 'sub_uc_02.html')

def make_voice_popup(request):
    return render(request, 'make_voice_popup.html')


def register_img(request):
    if request.method == 'GET':
        return render(request, 'register_img.html')
    elif request.method == 'POST':
        images = request.FILES.getlist("image")
        for image in images:
            picture = Picture()
            picture.img = image
            picture.save()

        return redirect('/')
    

def register_vid(request):
    if request.method == 'GET':
        return render(request, 'register_vid.html')
    elif request.method == 'POST':
        files = request.FILES.getlist("file")
        for file in files:
            song = Song()
            song.file = file
            song.save()

        return redirect('/')



# def upload_img_mp3(request):
#     password = '1tkddydwkdql'
#     local_file_path = '~/Downloads/image_did.png'
#     remote_file_path = '/root/html/brandcast/working/land/back_0506'
#     remote_username = 'root'
#     remote_host = 'brandcast.co.kr'
#     remote_port = '20022'

#     # sshpass 명령어와 scp 명령어를 조합하여 전송 명령어를 만듭니다.
#     command = f'sshpass -p {password} scp -P {remote_port} {local_file_path} {remote_username}@{remote_host}:{remote_file_path}'

#     # 명령어를 실행합니다.
#     result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

#     # 결과를 출력합니다.
#     if result.returncode == 0:
#         print('파일 전송이 완료되었습니다.')
#     else:
#         print('파일 전송에 실패하였습니다.')
#         print('오류 메시지:', result.stderr.decode())
        
#     # return redirect('upload_img_mp3')
