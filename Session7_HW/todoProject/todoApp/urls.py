
from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name = "home"),
    path('detail/<int:post_pk>', views.detail, name="detail"),
    path('new/', views.new, name = "new"),
    path('edit/<int:post_pk>', views.edit, name="edit"),
    path('delete/<int:post_pk>', views.delete, name="delete"),

]
