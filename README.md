# naluri-takehome
Take Home Assessment for [Naluri](https://www.naluri.life/). 

This is a simple HTTP server written in FastAPI to continuously calculate Pi using the [Leibniz formula for Pi](https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80).

## Getting Started

### Technologies
The application is built using the following technologies.

- Python v3.13.2 (and Pip the package manager)
- FastAPI v0.115.11
- Jinja v3.15
- virtualenv v20.29.2

So ideally, please install Python v3.13 and it's corresponding Pip version (if it doesn't come with it).

### Installation
Here is the installation instruction:

- Install the virtualenv package: `pip install virtualenv`
- Create a virtual environment: `python -m virtualenv .venv`
- Enter the virtual environment: `source .venv/bin/activate` or `.venv/Scrips/activate`
    - First command works for Linux and MacOS.
    - Second command works for Windows, but you might need to loosen PowerShell permissions first.
- Install all the required dependencies: `pip install -r requirements.txt`

And with that it should be ready to go!

### Run it
To run it, you can imply do: `fastapi dev naluri_takehome/main.py`
