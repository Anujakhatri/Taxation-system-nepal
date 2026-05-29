from django.urls import path
from .views import (register_user,login_user,profile,user_list,user_detail,user_stats,users_by_role)

urlpatterns = [
    # -------- AUTH -------
    path('auth/register/', register_user, name='register'),
    path('auth/login/', login_user, name='login'),

    # ------- PROFILE ------
    path('profile/', profile, name='profile'),

    # ------- USERS -------
    path('users/', user_list, name='user_list'),
    path('users/<int:pk>/', user_detail, name='user_detail'),

    # -------- STATS -------
    path('users/stats/', user_stats, name='user_stats'),

    # ------ FILTER BY ROLE ------
    path('users/role/<str:role>/', users_by_role, name='users_by_role'),
]