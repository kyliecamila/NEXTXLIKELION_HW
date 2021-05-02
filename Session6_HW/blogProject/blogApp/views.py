from django.shortcuts import render,redirect
from .models import Article


def index(request):    
    movie_count = Article.objects.filter(category="Movie").count()
    drama_count = Article.objects.filter(category="Drama").count()
    programming_count = Article.objects.filter(category="Programming").count()

    return render(request, 'index.html', {'num1':movie_count, 'num2':drama_count, 'num3':programming_count})
def new(request):
    if request.method =='POST':
       
        print(request.POST)
        new_article = Article.objects.create(
            title = request.POST['title'],
            content = request.POST['content'],
            category = request.POST['category'],
            time=article_time
        )
        return redirect('detail', article_pk = new_article.pk)
    return render(request, 'new.html')

def detail(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    return render(request, 'detail.html', {'article': article})
def movie(request):
    movies = Article.objects.filter(category= "Movie")
    return render(request, 'movie.html', {'articles': movies})
   
def drama(request):
    dramas = Article.objects.filter(category="Drama")    
    return render(request, 'drama.html', {'articles': dramas})
    
def programming(request):
    programmings = Article.objects.filter(category="Programming")    
    return render(request, 'programming.html', {'articles': programmings})
