# Generated by Django 3.2.2 on 2021-05-09 05:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoApp', '0003_alter_post_duedate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='duedate',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
