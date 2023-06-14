from django.urls import path
from .views import OrderModelViewSet, CreateOrderView

urlpatterns = [
    path('', CreateOrderView.as_view(), name="order_create"),
    path('<int:id>', OrderModelViewSet.as_view({'get': 'retrieve', 'delete': 'destroy'}), name='order_retrieve'),
]
