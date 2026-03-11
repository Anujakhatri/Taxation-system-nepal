##task 3 added by anuska ##
# Input salary
salary = float(input("Enter your monthly salary: "))

# Calculate tax using if statement
if salary > 0:
    tax = salary * 0.10
    print("Tax amount is:", tax)
else:
    tax = 0
    print("Invalid salary! Tax cannot be calculated.")