from enum import StrEnum

class PortfolioType(StrEnum):
    HIGH_RISK = "high_risk"
    RETIREMENT = "retirement"
    DEFAULT = "default"

class DepositPlanType(StrEnum):
    ONE_TIME: str = "one_time"
    RECURRING_MONTHLY: str = "recurring_monthly"
