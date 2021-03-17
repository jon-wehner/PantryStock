from app.models import db, Item


# Adds Items, you can add other users here if you want
def seed_items():
    items = [Item(name='Lettuce', category_id=1, fridge=True),
             Item(name='Apple', category_id=1, fridge=False),
             Item(name='Asparagus', category_id=1, fridge=True),
             Item(name='Avocado', category_id=1, fridge=False),
             Item(name='Banana', category_id=1, fridge=False),
             Item(name='Beet', category_id=1, fridge=True),
             Item(name='Bell Pepper', category_id=1, fridge=True),
             Item(name='Cabbage', category_id=1, fridge=True),
             Item(name='Carrot', category_id=1, fridge=True),
             Item(name='Lemon', category_id=1, fridge=False),
             Item(name='Corn', category_id=1, fridge=True),
             Item(name='Garlic', category_id=1, fridge=False),
             Item(name='Grapes', category_id=1, fridge=True),
             Item(name='Onion', category_id=1, fridge=False),
             Item(name='Pineapple', category_id=1, fridge=True),
             Item(name='Potoato', category_id=1, fridge=False),
             Item(name='Tomato', category_id=1, fridge=False),
             Item(name='Cucumber', category_id=1, fridge=True),
             Item(name='Chicken', category_id='2', fridge=True),
             Item(name='Ground Beef', category_id='2', fridge=True),
             Item(name='Steak', category_id='2', fridge=True),
             Item(name='Fish', category_id=3, fridge=True),
             Item(name='Shrimp', category_id=3, fridge=True),
             Item(name='Sliced Sandwich Meat', category_id=4, fridge=True),
             Item(name='Pasta', category_id=5, fridge=False),
             Item(name='Flour', category_id=6, fridge=False),
             Item(name='Bread', category_id=5, fridge=False),
             Item(name='Breakfast Cereal', category_id=5, fridge=False),
             Item(name='Rice', category_id=5, fridge=False),
             Item(name='Butter', category_id=7, fridge=True),
             Item(name='Sliced American Cheese', category_id=7, fridge=True),
             Item(name='Shredded Cheddar Cheese', category_id=7, fridge=True),
             Item(name='Milk', category_id=7, fridge=True),
             Item(name='Greek Yogurt', category_id=7, fridge=True),
             Item(name='Eggs', category_id=7, fridge=True),
             Item(name='Beer', category_id=8, fridge=True),
             Item(name='Wine', category_id=8, fridge=False),
             Item(name='Olive Oil', category_id=6, fridge=False),
             Item(name='Salt', category_id=6, fridge=False),
             Item(name='Canned Beans', category_id=9, fridge=False),
             Item(name='Canned Tomatoes', category_id=9, fridge=False),
             Item(name='Coffee Beans', category_id=10, fridge=False),
             Item(name='Ketchup', category_id=11, fridge=True),
             Item(name='Mustard', category_id=11, fridge=True),
             Item(name='Mayonnaise', category_id=11, fridge=True),
             Item(name='Black Pepper', category_id=6, fridge=False),
             Item(name='Chicken Noodle Soup', category_id=9, fridge=False),
             Item(name='Canned Tuna', category_id=9, fridge=False),
             Item(name='Vinegar', category_id=6, fridge=False),
             Item(name='Sugar', category_id=6, fridge=False),
             ]
    for item in items:
        db.session.add(item)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_items():
    db.session.execute('TRUNCATE items CASCADE;')
    db.session.commit()
