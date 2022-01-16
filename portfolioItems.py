import os
import pathlib
from PIL import Image

imagePath = input('Vilken sökväg ligger bilderna i? ')

finalJSON = '''portfolioImages = [
    '''

for image in pathlib.Path(imagePath).iterdir():

    width, height = Image.open(image).size

    filename = os.path.basename(image)

    filename, file_extension = os.path.splitext(filename)
    filename = filename.replace('HR', '')
    filename = filename.replace('TN', '')

    imageJSON = '''    {
        HRPath: "img/portfolioHR/''' + filename + 'HR' + file_extension + '''",
        TNPath: "img/portfolioTN/''' + filename + 'TN' + file_extension + '''",
        Height: "''' + str(height) + '''",
        Width: "''' + str(width) + '''",
        Label: [],
    },'''

    finalJSON += imageJSON

finalJSON += '''
]'''

print(finalJSON)
