import subprocess

password = '1tkddydwkdql'
local_file_path = '~/Downloads/mp3_did.mp3'
remote_file_path = '/root/html/brandcast/working/land/back_0506'
remote_username = 'root'
remote_host = 'brandcast.co.kr'
remote_port = '20022'

# sshpass 명령어와 scp 명령어를 조합하여 전송 명령어를 만듭니다.
command = f'sshpass -p 1tkddydwkdql sshpass -p {password} scp -P {remote_port} {local_file_path} {remote_username}@{remote_host}:{remote_file_path}'

# 명령어를 실행합니다.
result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# 결과를 출력합니다.
if result.returncode == 0:
    print('파일 전송이 완료되었습니다.')
else:
    print('파일 전송에 실패하였습니다.')
    print('오류 메시지:', result.stderr.decode())
