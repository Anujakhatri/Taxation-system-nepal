#*************** Task-1- Aishwarya *******************

name = input("Enter your name: ")
salary = int(input("Enter your monthly salary: "))

print("***** Employee Details *****")
print("Name:", name)
print("Monthly Salary:", salary)

#*************** Task-2- Anuja *******************
print(type(salary))
salary = float(salary)
print(type(salary))

#******TASK 3 BY ANUSKA******#
# Calculate tax using if statement
if salary > 0:
    tax = salary * 0.10
    print("Tax amount is:", tax)
else:
    tax = 0
    print("Invalid salary! Tax cannot be calculated.")