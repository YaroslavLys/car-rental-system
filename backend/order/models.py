from django.db import models
import datetime

from transport.models import Transport
from users.models import Profile

# Create your models here.

LOCATIONS_CHOICES = (
    (0, "Ukraine, Lviv. Stepan Bandera Street, 12."),
    (1, "Ukraine, Rivne. Soborna Street, 12a."),
    (2, "Ukraine, Ternopil. Lystopadova Street, 5."),
    (3, "Ukraine, Ivano-Frankivsk. Mykhailo Hrushevsky Street, 21.")
)


class Order(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, default=None)
    transport = models.ForeignKey(Transport, on_delete=models.CASCADE, default=None)
    created_at = models.DateTimeField(editable=False, auto_now=datetime.datetime.now())
    start_date = models.DateField()
    end_date = models.DateField()
    start_location = models.IntegerField(choices=LOCATIONS_CHOICES, default=0)
    end_location = models.IntegerField(choices=LOCATIONS_CHOICES, default=0)
    bill = models.FloatField(default=0)
    is_open = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.profile.user.email} order {self.transport.brand} {self.transport.model}"
