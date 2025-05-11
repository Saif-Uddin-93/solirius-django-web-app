from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    items = []
    return render(request, "home.html", {
        "home_items": items,
    })