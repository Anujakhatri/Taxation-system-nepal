from django.db import models

# Create your models here.


class Employee(models.Model):
    name = models.CharField(max_length=100)
    salary = models.FloatField()
    allowance = models.FloatField()
    deductions = models.FloatField()
    pan_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name