import unittest
from stashaway_takehome.deposit.deposit import deposit
from stashaway_takehome.deposit.constants import DepositPlanType, PortfolioType


class TestDeposit(unittest.TestCase):
    def test_throws_exception_if_more_than_3_deposit_plan(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY,
            DepositPlanType.RECURRING_MONTHLY,
        ]

        deposit_amounts = [
            10500,
            100,
            300
        ]

        with self.assertRaises(Exception) as context:
            deposit(deposit_plans, deposit_amounts)

        self.assertTrue('' in str(context.exception))

    def test_throws_exception_if_no_deposit_amounts(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY,
        ]

        with self.assertRaises(Exception) as context:
            deposit(deposit_plans, [])

        self.assertTrue('' in str(context.exception))

    def test_should_be_successful(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY
        ]

        deposit_amounts = [
            10500,
            100,
        ]

        result = deposit(deposit_plans, deposit_amounts)

        self.assertEqual(result[PortfolioType.HIGH_RISK], 10000)
        self.assertEqual(result[PortfolioType.RETIREMENT], 600)
        self.assertEqual(result[PortfolioType.DEFAULT], 0)

    def test_should_divert_additional_funds_to_default_portfolio(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY
        ]

        deposit_amounts = [
            20600,
            1000,
        ]

        result = deposit(deposit_plans, deposit_amounts)

        self.assertEqual(result[PortfolioType.HIGH_RISK], 20000)
        self.assertEqual(result[PortfolioType.RETIREMENT], 1200)
        self.assertEqual(result[PortfolioType.DEFAULT], 11000)

    def test_should_divert_extra_funds_to_default_portfolio(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY
        ]

        deposit_amounts = [
            10500,
            100,
            3000,
        ]

        result = deposit(deposit_plans, deposit_amounts)

        self.assertEqual(result[PortfolioType.HIGH_RISK], 30000)
        self.assertEqual(result[PortfolioType.RETIREMENT], 1800)
        self.assertEqual(result[PortfolioType.DEFAULT], 14000)

    def test_should_stop_processing_when_corresponding_deposit_doesnt_exist(self):
        deposit_plans = [
            DepositPlanType.ONE_TIME,
            DepositPlanType.RECURRING_MONTHLY
        ]

        deposit_amounts = [
            10500,
        ]

        result = deposit(deposit_plans, deposit_amounts)

        self.assertEqual(result[PortfolioType.HIGH_RISK], 40000)
        self.assertEqual(result[PortfolioType.RETIREMENT], 2300)
        self.assertEqual(result[PortfolioType.DEFAULT], 14000)