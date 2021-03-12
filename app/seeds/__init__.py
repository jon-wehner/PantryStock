from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .measurements import seed_measurements, undo_measurements

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_items()


# flask seed items
@seed_commands.command('items')
def insert_items():
    seed_items()


# flask seed measurements
@seed_commands.command('measurements')
def insert_measurements():
    seed_measurements()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_items()
