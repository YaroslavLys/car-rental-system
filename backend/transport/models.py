from django.db import models
from users.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator
import datetime

# Create your models here.

COLOR_CHOICES = (
    (0, 'black'),
    (1, 'white'),
    (2, 'red'),
    (3, 'blue'),
    (4, 'yellow'),
    (5, 'gray'),
    (6, 'silver'),
    (7, 'green'),
    (8, 'brown'),
    (9, 'orange')
)

TYPE_CHOICES = (
    (0, 'sedan'),
    (1, 'hatchback'),
    (2, 'suv'),
    (3, 'crossover'),
    (4, 'coupe'),
    (5, 'convertible'),
    (6, 'minivan'),
    (7, 'pickup truck')
)


class Transport(models.Model):
    brand = models.CharField(max_length=70)
    model = models.CharField(max_length=70)
    electro = models.BooleanField(default=False)
    production_year = models.DateField()
    mileage = models.FloatField(default=0)
    range = models.FloatField()
    color = models.IntegerField(choices=COLOR_CHOICES, default=0)
    image = models.ImageField(upload_to='transport', blank=True)
    type = models.IntegerField(choices=TYPE_CHOICES, default=0)
    description = models.CharField(max_length=500)
    base_price = models.FloatField()

    def __str__(self):
        return f"{self.brand}, {self.model} {self.production_year}"


class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=None)
    transport = models.ForeignKey(Transport, on_delete=models.CASCADE, default=None)
    created_at = models.DateTimeField(editable=False, auto_now=datetime.datetime.now())
    text = models.CharField(max_length=100, null=True)
    rate = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)]
    )

    def __str__(self):
        return f"{self.user.email}, {self.created_at}"
