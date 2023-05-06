from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'main.html')

def sub_uc_02(request):
    return render(request, 'sub_uc_02.html')

def make_voice_popup(request):
    return render(request, 'make_voice_popup.html')