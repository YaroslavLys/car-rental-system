from django.shortcuts import render
from rest_framework.generics import get_object_or_404, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet

from order.models import Order
from order.serializer import OrderSerializer, CreateOrderSerializer


# Create your views here.


class OrderModelViewSet(ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = OrderSerializer

    def get_object(self):
        order_id = self.kwargs.get("id")
        return get_object_or_404(Order, id=order_id)

    def get_queryset(self):
        return Order.objects.all()

    def perform_destroy(self, instance):
        transport = instance.transport
        transport.available = True
        transport.save()
        instance.delete()


class CreateOrderView(CreateAPIView):
    queryset = Order.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = CreateOrderSerializer
