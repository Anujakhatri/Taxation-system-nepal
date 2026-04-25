from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def calculate_tds(request):
    return render(request, "tds_calculation.html")

def income_tax(request):
    return render(request, "income_tax.html")

def corporate_tax(request):
    return render(request, "corporate_tax.html")

def vat_view(request):
    return render(request, "vat.html")

def contact(request):
    return render(request, "contact.html")