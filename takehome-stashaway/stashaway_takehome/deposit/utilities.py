
from stashaway_takehome.deposit.configurations import DEPOSIT_PLAN_CONFIGURATION


def get_deposit_plan_configuration(deposit_plan: str):
    configuration = DEPOSIT_PLAN_CONFIGURATION.get(deposit_plan)
    if not configuration:
        raise Exception(f'Deposit plan named "{deposit_plan}" does not exist!')

    return configuration

def get_deposit_amount(original, to_deduct):
    if original >= to_deduct:
        return to_deduct
    
    if original < to_deduct:
        return original