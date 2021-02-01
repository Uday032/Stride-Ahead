from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import FileUpload
from .seralizers import FileUploadSerializer

# Create your views here.
class FileUploadViewSet(APIView):
    serializer_class = FileUploadSerializer

    def get(self, request, *args, **kwargs):
        queryset = FileUpload.objects.all()
        serializer = FileUploadSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # print(request.data)
        attachment = request.data['attachment']
        FileUpload.objects.create(attachment=attachment)
        return Response({'message': 'File created'}, status=200)

class FileDeleteViewSet(APIView):

    def post(self, request, pk, *args, **kwargs):
        fileupload = FileUpload.objects.get(id=pk)
        fileupload.delete()
        return Response({'message': 'File Deleted'}, status=200)