# Generated by Django 3.2 on 2021-05-02 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogApp', '0003_delete_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='category',
            field=models.TextField(),
        ),
    ]
