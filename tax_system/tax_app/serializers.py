from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser


# =========================
# USER SERIALIZER
# =========================
class UserSerializer(serializers.ModelSerializer):

    user_type_display = serializers.CharField(
        source='get_user_type_display',
        read_only=True
    )

    class Meta:
        model = CustomUser
        fields = [
            'id',
            'email',
            'full_name',
            'phone',
            'address',

            'user_type',
            'user_type_display',

            # TAX FIELDS
            'pan_number',
            'vat_number',

            # STATUS
            'is_verified',

            'created_at'
        ]


# =========================
# REGISTER SERIALIZER
# =========================
class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        min_length=6
    )

    class Meta:
        model = CustomUser
        fields = [
            'id',
            'email',
            'password',
            'full_name',
            'user_type',

            'phone',
            'address',

            'pan_number',
            'vat_number'
        ]

    def create(self, validated_data):
        password = validated_data.pop('password')

        user = CustomUser.objects.create_user(
            password=password,
            **validated_data
        )

        return user


# =========================
# LOGIN SERIALIZER
# =========================
class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):

        email = data.get('email')
        password = data.get('password')

        user = authenticate(
            username=email,
            password=password
        )

        if not user:
            raise serializers.ValidationError(
                "Invalid email or password"
            )

        data['user'] = user
        return data


# =========================
# USER PROFILE SERIALIZER
# =========================
class UserProfileSerializer(serializers.ModelSerializer):

    user_type_display = serializers.CharField(
        source='get_user_type_display',
        read_only=True
    )

    class Meta:
        model = CustomUser
        fields = [
            'id',
            'email',
            'full_name',
            'phone',
            'address',
            'user_type',
            'user_type_display',

            # TAX FIELDS
            'pan_number',
            'vat_number',

            'is_verified',
            'created_at'
        ]

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance