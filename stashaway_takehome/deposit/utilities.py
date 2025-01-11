
from stashaway_takehome.deposit.configurations import DEPOSIT_PLAN_CONFIGURATION


def get_deposit_plan_configuration(deposit_plan: str):
    configuration = DEPOSIT_PLAN_CONFIGURATION.get(deposit_plan)
    if not configuration:
        raise Exception(f'Deposit plan named "{deposit_plan}" does not exist!')

    return configuration