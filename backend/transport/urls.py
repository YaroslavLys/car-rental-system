from django.urls import path
from . import views

urlpatterns = [
    path('', views.TransportListModeViewSet.as_view({'get': 'list'}), name='transport_list'),
    path('<int:id>', views.TransportListModeViewSet.as_view({'get': 'retrieve'}), name='transport_detail'),
    path('create-review/', views.CreateReviewView.as_view(), name='create_review')
]
