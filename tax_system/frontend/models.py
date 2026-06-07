from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    class UserType(models.TextChoices):
        INDIVIDUAL_TAXPAYER = 'individual', 'Individual Taxpayer'
        BUSINESS_OWNER      = 'business',  'Business Owner'
        CA                  = 'ca',        'Chartered Accountant'

    username    = None
    email       = models.EmailField(unique=True)
    full_name   = models.CharField(max_length=255, blank=True)
    user_type   = models.CharField(
        max_length=20,
        choices=UserType.choices,
        default=UserType.INDIVIDUAL_TAXPAYER,
    )
    created_at  = models.DateTimeField(auto_now_add=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
    )

    objects = CustomUserManager()

    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email
