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
    Item(name='Carrots', aisle='Produce', fridge=True),
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
