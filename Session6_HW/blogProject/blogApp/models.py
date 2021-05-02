from django.db import models

# Create your models here.
category = [('movie','movie'),('drama','drama'),('programming','programming'),]


class Article(models.Model):
    title = models.CharField(max_length = 255)
    content = models.TextField()
    category = models.TextField()
    time = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    

    def __str__(self):
        return self.title




       