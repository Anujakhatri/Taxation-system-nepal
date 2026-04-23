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

    return render(request, "tds.html", {"result": result})

def income_tax(request):
    return render(request, "income_tax.html")

def corporate_tax(request):
    return render(request, "corporate_tax.html")

def vat_calculator(request):
    return render(request, "vat_calculator.html")

def vat_view(request):
    return render(request, "vat.html")

def contact(request):
    return render(request, "contact.html")