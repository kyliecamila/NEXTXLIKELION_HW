
from django.contrib import admin
from django.urls import path,include
from todoApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('todoApp.urls')),
]
