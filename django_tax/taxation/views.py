from django.shortcuts import render , redirect
from django.contrib import messages
from .models import Employee

# Create your views here.
def home(request):
    return render(request, 'home.html')
def add_employee(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        salary = float(request.POST.get('salary'))
        allowance = float(request.POST.get('allowance'))
        deductions = float(request.POST.get('deductions'))
        pan = request.POST.get('pan')

        Employee.objects.create(
            name=name,
            salary=salary,
            allowance=allowance,
            deductions=deductions,
            pan_number=pan
        )

        messages.success(request, "Employee added successfully!")
        return redirect('add_employee')

    return render(request, 'add_employee.html')

def update_employee(request):
    return render(request, 'update_employee.html')

def view_report(request):
    employees = Employee.objects.all()  # Get all employees from DB
    return render(request, 'report.html', {'employees': employees})