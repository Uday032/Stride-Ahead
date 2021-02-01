from django.db import models
import datetime

# Create your models here.
class FileUpload(models.Model):
    attachment = models.FileField(upload_to='files/attachments/',blank=False, null=False)
    date_added = models.DateField(default=datetime.date.today)
 
    def delete(self, *args, **kwargs):
        self.attachment.delete()
        super().delete(*args, **kwargs)