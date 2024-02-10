from django.urls import path
from .api import *
from rest_framework.authtoken.views import ObtainAuthToken
from .views import *

urlpatterns = [
   path('api/products/', ProductListCreateApiView.as_view()),
   path('api/products/<int:pk>/', ProductRetrieveUpdateDestroyApiView.as_view()),
   path('api/token/', ObtainAuthToken.as_view()),
   path('', main)
]
