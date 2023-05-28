from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.TestEndpoint.as_view(), name='test'),
    path('profile/', views.UserProfileAPIView.as_view(), name='user_profile'),
    path('profile/avatar/', views.UserAvatarAPIView.as_view(), name='user_avatar'),
]
