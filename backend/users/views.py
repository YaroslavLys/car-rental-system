from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView

from users.serializer import ProfileSerializer, ProfileAvatarSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from users.models import CustomUser, Profile
from rest_framework.permissions import AllowAny, IsAuthenticated


# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class TestEndpoint(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)

    def post(self, request):
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)

    def put(self, request):
        return Response({}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        return Response({}, status=status.HTTP_400_BAD_REQUEST)


class UserProfileAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile


class UserAvatarAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileAvatarSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile
