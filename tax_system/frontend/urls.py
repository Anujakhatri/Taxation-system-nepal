from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("tds/", views.calculate_tds, name="tds"),
    path("income-tax/", views.income_tax, name="income-tax"),
    path("corporate-tax/", views.corporate_tax, name="corporate-tax"),
    path("vat/", views.vat_view, name="vat"),
    path("contact/", views.contact, name="contact"),
]
