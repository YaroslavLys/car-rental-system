from rest_framework import serializers
from transport.models import Transport, Review
from users.serializer import CustomUserSerializer


class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    transport = TransportSerializer()

    class Meta:
        model = Review
        fields = ('id', 'user', 'transport', 'created_at', 'rate', 'text')


class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'user', 'transport', 'created_at', 'rate', 'text')
