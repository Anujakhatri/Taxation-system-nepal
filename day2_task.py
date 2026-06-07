salary = float(input("Enter your salary: "))

if salary < 30000:
    tax = 0
elif salary <= 60000:
    tax = salary * 0.10
else:
    tax = salary * 0.20

