from fastapi import FastAPI, BackgroundTasks, Request
from fastapi.templating import Jinja2Templates
from utility.pi import calculate_circumference
from utility.calculating import CalculatingPi

app = FastAPI()
templates = Jinja2Templates(directory="naluri_takehome/templates")
calculating_pi = CalculatingPi()

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request,
        name="home.html"
    )


@app.get('/calculating_pi/start')
async def calculating_pi_start(background_tasks: BackgroundTasks):
    background_tasks.add_task(calculating_pi.start)
    return { "message": "Calculation of Pi has started" }
    
@app.get('/calculating_pi/result')
async def calculating_pi_result(request: Request):
    current_pi = calculating_pi.get_result().get('current_pi')
    circumference_of_the_sun = calculate_circumference(current_pi, 695508)
    return templates.TemplateResponse(
        request,
        name="result.html",
        context={
            "pi": current_pi,
            "circumference_of_the_sun": circumference_of_the_sun
        }
    )

@app.get('/calculating_pi/stop')
async def calculating_pi_stop():
    calculating_pi.stop()
    return { "message": "Calculation of Pi has stopped" }
