print("----------------Welcome to the Taxation System---------------------")

set_pan = set()
employee_records = {}

while True:
##########################  Anuja Task ##########################"
    print("Enter employee details:")
    name = input("Name: ")
    salary = float(input("Monthly Salary: "))
    allowance = float(input("Allowances: "))
    deductions = float(input("Deductions: "))
    pan_number = input("PAN Number: ")

    while pan_number in set_pan:
        print("PAN already exists. Enter again.")
        pan_number = input("PAN Number: ")
    set_pan.add(pan_number)
           
  ##########################  Anuska Task ##########################"  
    employee_records[name] = [salary, allowance, deductions, pan_number]

    choice = input("Do you want to add more employee records? (yes/no): ")
    if choice.lower() != 'yes':
        break

tax_slabs = (
    (0, 50000, 0.01),
    (50000, 100000, 0.10),
    (100000, float('inf'), 0.20)
)
##########################  Aiswarya's Task ##########################"
def calculate_tax(income):
    if income <= tax_slabs[0][1]:
        tax = income * tax_slabs[0][2]
        
    elif income <= tax_slabs[1][1]:
        tax = income * tax_slabs[1][2]
              
    else:
        tax = income * tax_slabs[2][2]
    
    return tax

##########################  Asmita's Task ##########################"  
print("\n-------------------TAXATION Report-------------------")
print("Employee Name\tEmployee Salary\tAllowances\tDeductions\tPAN Number\tTax Amount\tFinal Salary")

for name, details in employee_records.items():
    salary, allowance, deductions, pan_number = details
    taxable_income = salary + allowance - deductions
    tax_amount = calculate_tax(taxable_income)
    final_salary = taxable_income - tax_amount

    print(f"{name}\t\t{salary}\t\t{allowance}\t\t{deductions}\t\t{pan_number}\t\t{tax_amount:.2f}\t\t{final_salary:.2f}")