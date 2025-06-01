# naluri-takehome
This is a simple HTTP server written in FastAPI to continuously calculate Pi using the [Leibniz formula for Pi](https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80). This is also a Take Home Assessment for [Naluri](https://www.naluri.life/).

## Technologies
The application is built using the following technologies.

- Python v3.13.2 (and Pip the package manager)
- FastAPI v0.115.11
- Jinja v3.15
- virtualenv v20.29.2

So ideally, please install Python v3.13 and it's corresponding Pip version (if it doesn't come with it).

## Installation
Here is the installation instruction:

- Install the virtualenv package: `pip install virtualenv`
- Create a virtual environment: `python -m virtualenv .venv`
- Enter the virtual environment: `source .venv/bin/activate` or `.venv/Scrips/activate`
    - First command works for Linux and MacOS.
    - Second command works for Windows, but you might need to loosen PowerShell permissions first.
- Install all the required dependencies: `pip install -r requirements.txt`

And with that it should be ready to go!

## Running the application
To run it, you can simply do: `fastapi dev naluri_takehome/main.py`

There are 4 URLs you have to look at, namely:

- [GET /](http://127.0.0.1:8000/) - The home page with the same instructions as this one.
- [GET /calculating_pi/start](http://127.0.0.1:8000/calculating_pi/start) - This endpoint starts the calculation.
- [GET /calculating_pi/result](http://127.0.0.1:8000/calculating_pi/result) - The page to get the latest calculation of PI and the circumference of the sun. Keep refreshing to see new ones! 
- [GET /calculating_pi/stop](http://127.0.0.1:8000/calculating_pi/stop) - Stops the calculation, but doesn't actually work because FastAPI background tasks can't be elegantly killed. Workaround would probably to find and kill the child process but that's a bit out of scope.

Hopefully, it works well on your. Please let me know if there is any issues, or inquiries.