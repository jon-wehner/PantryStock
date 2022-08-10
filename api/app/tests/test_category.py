import pytest
from app.models import Category

test_category = Category()
test_category.id = 1
test_category.name = "name"


def test_to_dic():
    assert test_category.to_dict() == {
        "id": 1,
        "name": "name",
    }
