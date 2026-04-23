from django.urls import path
from . import views
from .views import calculate_tds, vat_calculator, income_tax, corporate_tax, vat_view, contact

urlpatterns = [
    path('', views.home, name='home'),
    path("tds/", calculate_tds, name="tds"),
    path("vat-calculator/", vat_calculator, name="vat_calculator"),
    path("income-tax/", income_tax, name="income-tax"),
    path("corporate-tax/", corporate_tax, name="corporate-tax"),
    path("vat/", vat_view, name="vat"),
    path("contact/", contact, name="contact"),
]

