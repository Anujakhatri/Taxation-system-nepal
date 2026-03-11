#*************** Task-1 *******************

name = input("Enter your name: ")
salary = int(input("Enter your monthly salary: "))

print("***** Employee Details *****")
print("Name:", name)
print("Monthly Salary:", salary)


# *************day-2***************
salary = int(input("Enter your salary: "))
if salary <30000:
  tax = 0
elif  salary<=6000:
  tax = 0.1*salary
else:
  tax = 0.2*salary
net_salary = salary - tax
print("Salary: ",salary)
print("Tax: ",tax)
print("Net Salary: ",net_salary)
