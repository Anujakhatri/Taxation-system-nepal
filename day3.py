

def save_tax_record():
    file = open("userdata.txt","a")
    for i in range(2):
        name = input("Enter employee name: ")
        salary = float(input("Enter employee salary: "))
        tax = calculate_tax(salary)
        net_salary = calculate_net_salary(salary, tax)
        file.write(f"{name},{salary},{tax:.2f},{net_salary:.2f}\n")
    file.close()

def calculate_tax(salary):
    if salary <= 10000:
        tax = salary * 0.1
    elif salary <= 20000:
        tax = salary * 0.15
    else:
        tax = salary * 0.2
    return tax

def calculate_net_salary(salary, tax):
    final_salary = salary - tax
    return final_salary

def read_tax_records():
    file = open("userdata.txt", "r")
    data = file.read()
    print("Name\t Salary\t Tax\t Net Salary")
    for line in data.splitlines():
        print(line.replace(",", " \t"))
    file.close()

if __name__ == "__main__":
    save_tax_record()
    read_tax_records()