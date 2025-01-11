from stashaway_takehome.deposit.constants import DepositPlanType, PortfolioType
from stashaway_takehome.deposit.utilities import get_deposit_plan_configuration


portfolios = {
    PortfolioType.HIGH_RISK: 0,
    PortfolioType.RETIREMENT: 0,
    PortfolioType.DEFAULT: 0,
}

def deposit(
    deposit_plans: list[DepositPlanType],
    deposit_amounts: list[int]
):
    if len(deposit_plans) > 2:
        raise Exception("More than 2 deposit plans submitted!")
    
    if len(deposit_amounts) <= 0:
        raise Exception("No deposits submitted!")
    
    for index, deposit_plan in enumerate(deposit_plans):
        configuration = get_deposit_plan_configuration(deposit_plan)
        deposit_amount = deposit_amounts[index]

        for key in portfolios.keys():
            if key == PortfolioType.DEFAULT:
                continue

            amount_to_add = configuration.get(key)

            deposit_amount -= amount_to_add
            deposit_amounts[index] = deposit_amount

            portfolios[key] += amount_to_add
    
    for deposit_amount in deposit_amounts:
        portfolios[PortfolioType.DEFAULT] += deposit_amount

    return portfolios
