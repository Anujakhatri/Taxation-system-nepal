from django.urls import path
from . import views
from .views import calculate_tds

urlpatterns = [
    path('', views.home, name='home'),
    path("tds/", calculate_tds, name="tds"),
]
