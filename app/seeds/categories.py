from app.models import db, Category


# Adds Category, you can add more if you want
def seed_categories():
    categories = [Category(name='Produce'),
                  Category(name='Butcher'),
                  Category(name='Seafood'),
                  Category(name='Deli'),
                  Category(name='Grains & Bread'),
                  ]
