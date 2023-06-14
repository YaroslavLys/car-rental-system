from rest_framework import serializers

from order.models import Order
from transport.serializer import TransportSerializer


class OrderSerializer(serializers.ModelSerializer):
    transport = TransportSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
