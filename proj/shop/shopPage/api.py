from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class ProductListCreateApiView(generics.ListCreateAPIView):

    serializer_class = ProductSerializer
    authentication_class = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        
        queryset = Product.objects.all()

        name = self.request.query_params.get('name')
        if name:
            queryset = queryset.filter(name__icontains=name)
        
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')

        if min_price:
            queryset = queryset.filter(price__gte = min_price)
        
        if max_price:
            queryset = queryset.filter(price__gte = max_price)

        return queryset

class ProductRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer