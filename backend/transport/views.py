from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from transport.models import Transport, Review
from transport.serializer import TransportSerializer, ReviewSerializer, CreateReviewSerializer
from rest_framework import pagination
from rest_framework.generics import CreateAPIView


# Create your views here.

class TransportPagination(pagination.PageNumberPagination):
    page_size = 2


class TransportListModeViewSet(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = TransportSerializer
    pagination_class = TransportPagination

    def get_object(self):
        transport_id = self.kwargs.get("id")
        return get_object_or_404(Transport, id=transport_id)

    def get_queryset(self):
        return Transport.objects.all()

    def retrieve(self, request, *args, **kwargs):
        transport = self.get_object()
        reviews = transport.review_set.all()
        serializer = self.get_serializer(transport)
        reviews_serializer = ReviewSerializer(reviews, many=True)
        data = {
            "transport": serializer.data,
            "reviews": reviews_serializer.data
        }
        return Response(data)


class CreateReviewView(CreateAPIView):
    queryset = Review.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = CreateReviewSerializer
