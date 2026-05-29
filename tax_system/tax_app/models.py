from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


# ───────────────────────── USER MANAGER ─────────────────────────
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_verified", True)

        return self.create_user(email, password, **extra_fields)


# ───────────────────────── CUSTOM USER ─────────────────────────
class CustomUser(AbstractUser):
    class UserType(models.TextChoices):
        INDIVIDUAL = "individual", "Individual Taxpayer"
        BUSINESS   = "business", "Business Owner"
        CA         = "ca", "Chartered Accountant"
        ADMIN      = "admin", "Admin"

    
    username = None

    email = models.EmailField(unique=True)

    full_name = models.CharField(max_length=255, blank=True)

    phone = models.CharField(max_length=15, blank=True, null=True)

    address = models.TextField(blank=True, null=True)

    user_type = models.CharField(
        max_length=20,
        choices=UserType.choices,
        default=UserType.INDIVIDUAL,
    )

    # ───── TAX RELATED FIELDS  ─────
    pan_number = models.CharField(max_length=20, blank=True, null=True, unique=True)
    vat_number = models.CharField(max_length=20, blank=True, null=True, unique=True)

    # status fields
    is_verified = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # permissions fix 
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="customuser_set",
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="customuser_set",
        blank=True,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["full_name"]

    def __str__(self):
        return self.email