from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display  = ('email', 'full_name', 'user_type', 'is_staff', 'created_at')
    list_filter   = ('user_type', 'is_staff', 'is_active')
    search_fields = ('email', 'full_name')
    ordering      = ('-created_at',)

    # Override fieldsets because username is gone
    fieldsets = (
        (None,            {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name', 'user_type')}),
        ('Permissions',   {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'user_type', 'password1', 'password2'),
        }),
    )
