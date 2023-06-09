"""hiproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import main.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main.views.main, name='main'),
    # path('sub_uc_02/', main.views.sub_uc_02, name='sub_uc_02'),
    path('make_voice_popup/', main.views.make_voice_popup, name='make_voice_popup'),
    path('register_img/', main.views.register_img),
    # path('register_vid/', main.views.register_vid),
]
