from django.shortcuts import render
from .models import *
from django.http import HttpResponse , JsonResponse
# Create your views here.


def hola(request):
    
    return JsonResponse("<h1>hola Carmen</h1>")