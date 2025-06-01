
# Gregory-Leibniz Series
def estimate_pi(
    pi_from_last_compute: float = 0.0,
    term_from_last_compute: int = 0,
    max_terms: int = 5
):
    result = pi_from_last_compute 
    sign = 1.0

    if (pi_from_last_compute != 0):
        result = pi_from_last_compute / 4.0

    if term_from_last_compute % 2 != 0:
        sign = -sign

    for n in range(term_from_last_compute, max_terms):
        result += sign / (2.0 * n + 1.0)
        sign = -sign
    
    return 4 * result

def calculate_circumference(pi: float, radius: float):
    return (pi * 2) * radius