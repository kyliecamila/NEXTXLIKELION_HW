from django.shortcuts import render, redirect
from .models import Post


def home(request):
    posts = Post.objects.all().order_by('duedate')
    
    return render(request, 'home.html', { 'posts': posts})
    

def detail(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    return render(request, 'detail.html', {'post': post})

def new(request):
    if request.method =='POST':
        new_post = Post.objects.create(
            title = request.POST['title'],
            content = request.POST['content'],
            duedate = request.POST['duedate'],
        )
        return redirect('home')
    return render(request, 'new.html')

def edit(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    if request.method =='POST':
        Post.objects.filter(pk=post_pk).update(
            title = request.POST['title'],
            content = request.POST['content'],
            duedate = request.POST['duedate'],
        )
        return redirect('home')
    return render(request, 'edit.html', {'post': post})

def delete(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    post.delete()
    return redirect('home')



