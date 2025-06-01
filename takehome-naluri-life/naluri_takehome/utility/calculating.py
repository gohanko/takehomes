import time
from dataclasses import dataclass
from utility.file import read_json_from_file, write_json_to_file
from utility.pi import estimate_pi

@dataclass
class PiCalculationResult:
    current_pi: float = 0.0
    current_term: int = 0

class CalculatingPi:
    isOn = False
    pi_calculation_result = PiCalculationResult()

    def _read_from_disk(self):
        json_data = read_json_from_file('./data.json')
        if json_data:
            self.pi_calculation_result.current_pi = json_data.get("current_pi")
            self.pi_calculation_result.current_term = json_data.get('current_term')

    def _save_to_disk(self):
        pi_calculation_result = self.get_result()
        write_json_to_file('./data.json', pi_calculation_result)

    def __init__(self):
        self._read_from_disk()

    def get_result(self):
        pi_calculation_result = {
            'current_pi': self.pi_calculation_result.current_pi,
            'current_term': self.pi_calculation_result.current_term
        }

        return pi_calculation_result

    def start(self):
        self.isOn = True
        self.process()

    def process(self):
        current_term = 0
        if self.pi_calculation_result.current_term > 0:
            current_term = self.pi_calculation_result.current_term + 1

        while self.isOn:
            current_pi = estimate_pi(
                self.pi_calculation_result.current_pi,
                current_term,
                current_term + 1
            )

            self.pi_calculation_result.current_pi = current_pi
            self.pi_calculation_result.current_term = current_term

            self._save_to_disk()
        
            current_term += 1
            time.sleep(0.5)

    def stop(self):
        self.isOff = True
