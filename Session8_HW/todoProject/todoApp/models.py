from django.db import models
# from datetime import datetime, date


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    duedate = models.CharField(max_length=255)
  

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete = models.CASCADE, related_name ='comments' )
    content =models.TextField()
    