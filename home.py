<<<<<<< HEAD
#*************** Task-1- Aishwarya *******************
name = input("Enter your name: ")
salary = int(input("Enter your monthly salary: "))

print("***** Employee Details *****")
print("Name:", name)
print("Monthly Salary:", salary)

#*************** Task-2- Anuja *******************
salary=input("Enter your salary: ")
=======
#*************** Task-2- Anuja *******************
salary = int(input("Enter your monthly salary: "))
>>>>>>> 7890020b6b73d5c15ecba168ff9e83dbad693918
print(type(salary))
salary = float(salary)
print(type(salary))

#*************** Task-3- Anuska *******************
if salary > 0:
    tax = salary * 0.10
    print("Tax amount is:", tax)
else:
    tax = 0
    print("Invalid salary! Tax cannot be calculated.")

#*************** Task-4- Asmita *******************
print("\n-------------------TAXATION Report-------------------")
print("Employee Name\tEmployee Salary\tTax Amount")

print(name,"\t\t",salary,"\t\t",tax)
