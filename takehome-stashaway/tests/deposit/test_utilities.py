
import unittest

from stashaway_takehome.deposit.utilities import get_deposit_plan_configuration


class TestUtilities(unittest.TestCase):
    def test_throws_exception_if_deposit_plan_does_not_exist(self):
        with self.assertRaises(Exception) as context:
            get_deposit_plan_configuration("Fake Desposit Plan")

        self.assertTrue('' in str(context.exception))