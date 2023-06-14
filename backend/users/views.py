from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView

from order.serializer import OrderSerializer
from users.serializer import ProfileSerializer, ProfileAvatarSerializer, ProfileBioSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from users.models import CustomUser, Profile
from rest_framework.permissions import AllowAny, IsAuthenticated


# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class TestEndpoint(APIView):
    permission_classes = (IsAuthenticated,)

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


class BalanceEndpoint(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        amount = int(request.POST.get('amount'))
        user = CustomUser.objects.get(id=request.user.id)
        user.balance += amount
        user.save()
        return Response({}, status=status.HTTP_200_OK)


class ProfileBioAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileBioSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile


class UserProfileAPIView(RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile

    def retrieve(self, request, *args, **kwargs):
        profile = self.get_object()
        orders = profile.order_set.all()
        profile_serializer = self.get_serializer(profile)
        order_serializer = OrderSerializer(orders, many=True)
        data = {
            "profile": profile_serializer.data,
            "orders": order_serializer.data
        }
        return Response(data)


class UserAvatarAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileAvatarSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile
