from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

from django.shortcuts import render

def calculate_tds(request):
    result = None

    if request.method == "POST":
        payment_type = request.POST.get("type")
        amount = float(request.POST.get("amount"))

        rate = 0

        if payment_type == "salary":
            rate = 0.10  # simplified
        elif payment_type == "rent":
            rate = 0.10
        elif payment_type == "service":
            rate = 0.15
        elif payment_type == "dividend":
            rate = 0.05
        elif payment_type == "interest":
            rate = 0.05
        else:
            rate = 0

        tds_amount = amount * rate
        net_amount = amount - tds_amount

        result = {
            "type": payment_type,
            "amount": amount,
            "rate": rate * 100,
            "tds": tds_amount,
            "net": net_amount
        }

    return render(request, "tds_calculation.html", {"result": result})

def income_tax(request):
    result = None

    if request.method == "POST":
        income = float(request.POST.get("income"))
        employment_type = request.POST.get("employment_type")
        marital_status = request.POST.get("marital_status")

        # Income tax rates based on employement type
        if employment_type == "salary":
            tax_rate = 0.1
            if marital_status == "couple":
                tax_rate -= 0.01
        elif employment_type == "business":
            tax_rate = 0.15
            if marital_status == "couple":
                tax_rate -= 0.15
        elif employment_type == "foreign_employment":
            tax_rate = 0.05
            if marital_status == "couple":
                tax_rate -= 0.05
        else:
            tax_rate = 0.08 
            if marital_status == "couple":
                tax_rate -= 0.08 

        tax_amount = income * tax_rate
        net = income - tax_amount

        result = {
            "amount": income,
            "rate": tax_rate * 100,
            "tax_amount": tax_amount,
            "net": net,
            "type": employment_type
        }

    return render(request, "income_tax.html", {"result": result})


def corporate_tax(request):
    return render(request, "corporate_tax.html")

def vat_calculator(request):
    return render(request, "vat_calculator.html")

def vat_view(request):
    return render(request, "vat.html")

def contact(request):
    return render(request, "contact.html")