from app.models import db, Item


# Adds Items, you can add other users here if you want
def seed_items():
    items = [Item(name='Lettuce', aisle_id=1, fridge=True),
             Item(name='Apple', aisle_id=1, fridge=False),
             Item(name='Asparagus', aisle_id=1, fridge=True),
             Item(name='Avocado', aisle_id=1, fridge=False),
             Item(name='Banana', aisle_id=1, fridge=False),
             Item(name='Beet', aisle_id=1, fridge=True),
             Item(name='Bell Pepper', aisle_id=1, fridge=True),
             Item(name='Cabbage', aisle_id=1, fridge=True),
             Item(name='Carrot', aisle_id=1, fridge=True),
             Item(name='Lemon', aisle_id=1, fridge=False),
             Item(name='Corn', aisle_id=1, fridge=True),
             Item(name='Garlic', aisle_id=1, fridge=False),
             Item(name='Grapes', aisle_id=1, fridge=True),
             Item(name='Onion', aisle_id=1, fridge=False),
             Item(name='Pineapple', aisle_id=1, fridge=True),
             Item(name='Potoato', aisle_id=1, fridge=False),
             Item(name='Tomato', aisle_id=1, fridge=False),
             Item(name='Cucumber', aisle_id=1, fridge=True),
             Item(name='Chicken', aisle_id='2', fridge=True),
             Item(name='Ground Beef', aisle_id='2', fridge=True),
             Item(name='Steak', aisle_id='2', fridge=True),
             Item(name='Fish', aisle_id=3, fridge=True),
             Item(name='Shrimp', aisle_id=3, fridge=True),
             Item(name='Sliced Turkey', aisle_id=4, fridge=True),
             Item(name='Pasta', aisle_id=5, fridge=False),
             Item(name='Flour', aisle_id='Baking & Cooking', fridge=False),
             Item(name='Bread', aisle_id=5, fridge=False),
             Item(name='Breakfast Cereal', aisle_id=5, fridge=False),
             Item(name='Rice', aisle_id=5, fridge=False),
             Item(name='Butter', aisle_id='Dairy', fridge=True),
             Item(name='Sliced American Cheese', aisle_id='Dairy', fridge=True),
             Item(name='Shredded Cheddar Cheese', aisle_id='Dairy', fridge=True),
             Item(name='Milk', aisle_id='Dairy', fridge=True),
             Item(name='Greek Yogurt', aisle_id='Dairy', fridge=True),
             Item(name='Eggs', aisle_id='Dairy', fridge=True),
             Item(name='Beer', aisle_id='Beer & Wine', fridge=True),
             Item(name='Wine', aisle_id='Beer & Wine', fridge=False),
             Item(name='Olive Oil', aisle_id='Baking & Cooking', fridge=False),
             Item(name='Salt', aisle_id='Baking & Cooking', fridge=False),
             Item(name='Canned Beans', aisle_id='Canned Goods', fridge=False),
             Item(name='Canned Tomatoes', aisle_id='Canned Goods', fridge=False),
             Item(name='Coffee Beans', aisle_id='Coffee & Tea', fridge=False),
             Item(name='Ketchup', aisle_id='Condiments', fridge=True),
             Item(name='Mustard', aisle_id='Condiments', fridge=True),
             Item(name='Mayonnaise', aisle_id='Condiments', fridge=True),
             Item(name='Black Pepper', aisle_id='Baking & Cooking', fridge=False),
             Item(name='Chicken Noodle Soup', aisle_id='Canned Goods', fridge=False),
             Item(name='Canned Tuna', aisle_id='Canned Goods', fridge=False),
             Item(name='Vinegar', aisle_id='Baking & Cooking', fridge=False),
             Item(name='Sugar', aisle_id='Baking & Cooking', fridge=False),
             ]
    for item in items:
        db.session.add(item)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the itemss table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_items():
    db.session.execute('TRUNCATE items;')
    db.session.commit()
