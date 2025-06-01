
from stashaway_takehome.deposit.constants import DepositPlanType, PortfolioType


DEPOSIT_PLAN_CONFIGURATION = {
    DepositPlanType.ONE_TIME: {
        PortfolioType.HIGH_RISK: 10000,
        PortfolioType.RETIREMENT: 500,
    },
    DepositPlanType.RECURRING_MONTHLY: {
        PortfolioType.HIGH_RISK: 0,
        PortfolioType.RETIREMENT: 100,
    }
}