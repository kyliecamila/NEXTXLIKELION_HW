
from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.home, name = "home"),
    path('detail/<int:post_pk>', views.detail, name="detail"),
    path('new/', views.new, name = "new"),
    path('edit/<int:post_pk>', views.edit, name="edit"),
    path('delete/<int:post_pk>', views.delete, name="delete"),
    path('comment/<int:post_pk><int:comment_pk>', views.delete_comment, name="delete_comment"),

    path('registration/signup', views.signup, name="signup"),
    path('registration/login', views.login, name="login"),
    path('registration/logout', views.logout, name="logout"),
    path('registration/my', views.my, name = "my"),
    path('accounts/' , include('allauth.urls')),
]
