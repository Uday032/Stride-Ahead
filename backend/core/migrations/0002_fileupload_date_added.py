# Generated by Django 3.1.5 on 2021-01-30 07:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileupload',
            name='date_added',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
