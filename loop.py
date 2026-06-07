employee_list = []
tax_list = []

for i in range(1, 6):
    print("\nEntering details for Employee:", i)
    name = input("Enter employee name: ")
    normal_salary = int(input("Enter your monthly salary: "))
    tax_salary = int(input("Enter your exact salary: "))
    
    tax_percent = ((normal_salary - tax_salary) / normal_salary) * 100
    
    employee_list.append(name)
    tax_list.append(tax_percent)
    
    print(f"Employee: {name} Tax: {tax_percent:.2f}%")

print("\nSummary of all employees:")
for i in range(5):
    name = employee_list[i]
    tax = tax_list[i]
    print(f"{i+1} | Name: {name} | Tax Rate: {tax:.2f}%")

