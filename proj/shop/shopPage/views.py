from django.shortcuts import render
from .models import *
from django.http import HttpRequest
# Create your views here.
def main(request: HttpRequest):
    all_products = Product.objects.all()
    context = {
        'all_products': all_products
    }
    return render(request, 'shopPage/shop_page.html', context)