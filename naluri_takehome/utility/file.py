import json

def read_json_from_file(filename: str):
    try:
        fileHandler = open(filename, "r")
    except FileNotFoundError:
        return {}
    
    json_data = json.load(fileHandler)
    return json_data

def write_json_to_file(filename: str, dict_data: dict):
    fileHandler = open(filename, 'w')
    json.dump(dict_data, fileHandler, indent=4)