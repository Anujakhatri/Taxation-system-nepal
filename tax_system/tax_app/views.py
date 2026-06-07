from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser
from .serializers import (
    UserSerializer,
    RegisterSerializer,
    LoginSerializer,
    UserProfileSerializer
)


###############AUTH ################

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():

        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "User registered successfully",

            "user": UserSerializer(user).data,

            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }

        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):

    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():

        user = serializer.validated_data['user']

        refresh = RefreshToken.for_user(user)

        return Response({

            "message": "Login successful",

            "user": UserSerializer(user).data,

            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }

        })

    return Response(serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)


# ─────────────────────────── USER ───────────────────────────

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_list(request):

    users = CustomUser.objects.all()

    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_detail(request, pk):

    try:
        user = CustomUser.objects.get(pk=pk)

    except CustomUser.DoesNotExist:
        return Response(
            {"error": "User not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    current_user = request.user

    # Only owner or admin can update/delete
    if request.method in ['PUT', 'DELETE']:

        if current_user != user and not current_user.is_staff:

            return Response(
                {"error": "Unauthorized"},
                status=status.HTTP_403_FORBIDDEN
            )

    # GET
    if request.method == 'GET':

        serializer = UserSerializer(user)

        return Response(serializer.data)

    # PUT
    elif request.method == 'PUT':

        serializer = UserProfileSerializer(
            user,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)

        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    # DELETE
    elif request.method == 'DELETE':

        user.delete()

        return Response({
            "message": "User deleted successfully"
        }, status=status.HTTP_204_NO_CONTENT)


#  PROFILE 

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile(request):

    user = request.user

    # GET PROFILE
    if request.method == 'GET':

        serializer = UserProfileSerializer(user)

        return Response(serializer.data)

    # UPDATE PROFILE
    elif request.method == 'PUT':

        serializer = UserProfileSerializer(
            user,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():

            serializer.save()

            return Response({
                "message": "Profile updated successfully",
                "data": serializer.data
            })

        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


# ─────────────────────────── USER STATS ───────────────────────────

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_stats(request):

    total_users = CustomUser.objects.count()

    individual_users = CustomUser.objects.filter(
        user_type='individual'
    ).count()

    business_users = CustomUser.objects.filter(
        user_type='business'
    ).count()

    ca_users = CustomUser.objects.filter(
        user_type='ca'
    ).count()

    return Response({

        "total_users": total_users,

        "individual_taxpayers": individual_users,

        "business_owners": business_users,

        "chartered_accountants": ca_users,

    })


# ─────────────────────────── USERS BY ROLE ──────────────────────────

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def users_by_role(request, role):

    users = CustomUser.objects.filter(
        user_type=role
    )

    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)
