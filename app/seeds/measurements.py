from app.models import db, Measurement


# Adds measurements, you can add other users here if you want
def seed_measurements():
    measurements = [Measurement(unit='Each'),
                    Measurement(unit='Pound'),
                    Measurement(unit='Cup'),
                    Measurement(unit='Package'),
                    Measurement(unit='Can'),
                    Measurement(unit='Gram'),
                    Measurement(unit='Ounce'),
                    Measurement(unit='Carton'),
                    Measurement(unit='Gallon'),
                    Measurement(unit='Tub'),
                    Measurement(unit='Bottle'),
                    Measurement(unit='6 Pack'),
                    Measurement(unit='12 Pack'),
                    ]
    for measurement in measurements:
        db.session.add(measurement)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the measurements table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_measurements():
    db.session.execute('TRUNCATE measurements RESTART IDENTITY CASCADE;')
    db.session.commit()
