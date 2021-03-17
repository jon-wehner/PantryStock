from app.models import db, Category


# Adds Category, you can add more if you want
def seed_categories():
    categories = [Category(name='Produce'),
                  Category(name='Butcher'),
                  Category(name='Seafood'),
                  Category(name='Deli'),
                  Category(name='Grains & Bread'),
                  Category(name='Baking & Cooking'),
                  Category(name='Dairy'),
                  Category(name='Beer & Wine'),
                  Category(name='Canned Goods'),
                  Category(name='Coffee & Tea'),
                  Category(name='Condiments'),
                  ]
    for category in categories:
        db.session.add(category)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()
