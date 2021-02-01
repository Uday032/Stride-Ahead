from django.urls import path
from django.conf.urls import url
from .views import FileUploadViewSet, FileDeleteViewSet

urlpatterns = [
    url(r'^fileupload/$', FileUploadViewSet.as_view(), name='file-upload'),
    path('filedelete/<int:pk>', FileDeleteViewSet.as_view(), name='FILE-DELETE'),
]