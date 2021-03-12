from app.models import db, Item


# Adds a demo user, you can add other users here if you want
def seed_items():

    items =
    [Item(name='Lettuce', aisle='Produce', fridge=True),
        Item(name='Apple', aisle='Produce', fridge=False),
        Item(name='Asparagus', aisle='Produce', fridge=True),
        Item(name='Avocado', aisle='Produce', fridge=False),
        Item(name='Banana', aisle='Produce', fridge=False),
        Item(name='Beet', aisle='Produce', fridge=True),
        Item(name='Bell Pepper', aisle='Produce', fridge=True),
        Item(name='Cabbage', aisle='Produce', fridge=True),
        Item(name='Carrot', aisle='Produce', fridge=True),
        Item(name='Lemon', aisle='Produce', fridge=False),
        Item(name='Corn', aisle='Produce', fridge=True),
        Item(name='Garlic', aisle='Produce', fridge=False),
        Item(name='Grapes', aisle='Produce', fridge=True),
        Item(name='Onions', aisle='Produce', fridge=False),
        Item(name='Pineapple', aisle='Produce', fridge=True),
        Item(name='Potoato', aisle='Produce', fridge=False),
        Item(name='Tomato', aisle='Produce', fridge=False),
        Item(name='Cucumber', aisle='Produce', fridge=True),
        Item(name='Chicken', aisle='Butcher', fridge=True),
        Item(name='Ground Beef', aisle='Butcher', fridge=True),
        Item(name='Steak', aisle='Butcher', fridge=True),
        Item(name='Fish', aisle='Seafood', fridge=True),
        Item(name='Shrimp', aisle='Seafood', fridge=True),
        Item(name='Sliced Turkey', aisle='Deli', fridge=True),
        Item(name='Pasta', aisle='Grains & Bread', fridge=False),
        Item(name='Flour', aisle='Grains & Bread', fridge=False),
        Item(name='Bread', aisle='Grains & Bread', fridge=False),
        Item(name='Breakfast Cereal', aisle='Grains & Bread', fridge=False),
        Item(name='Rice', aisle='Grains & Bread', fridge=False),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
        Item(name='', aisle='', fridge=''),
    ]

    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_items():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
