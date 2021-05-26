from django.db import models
from django.contrib.auth.models import User
# from datetime import datetime, date


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    duedate = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                    related_name='posts', default=None)
  

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete = models.CASCADE, related_name ='comments' )
    content =models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                    related_name='comments', default=None)
  
    