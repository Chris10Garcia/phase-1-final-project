
# Title

- intro  (purpose of this repo)

## Overview

- Using Open DB brewery list, I created a page that shows all of the breweries located in NYC
- The page first loads all of the breweries as list
- When you click the button to expand, details of the brewery is shown. This includes address, phone, neighborhood, borough, and website.
- You can filter the list by NYC boroughs or you can search by key terms

## Get Started

- clone repo
- install json-server (see here for instructions)
- run json-server --watch db.json
- enjoy finding out local breweries of NYC!


## Acquiring the Data

- Open DB brewery is a public API that is a database of all the breweries in the US
- To filter this massive dataset down for only NYC, I wrote two script files to 
1. acquire the JSON data for NY state 
2. to build a new file for breweries located within NYC by comparing zip codes
- This new file is then hosted on a json-server
- To see these script files, please navigate within the folder "other"

## Meeting the Project requirements

1. A HTML / CSS / JS frontend using a local db.json file with data from a public API. This file contains over 5 objects and over 3 attributes. The data is fetched and functions called asynchronously.

2. Single HTML page with no redirects or reloads

3. 4 distinct event listeners
    - DOMContentLoaded
    - submit
    - change
    - click

4. 1 instance of array iteration (forEach)

5. DRY code


## Source and Credits

NYC zip code CSV
- https://github.com/erikgregorywebb/nyc-housing/blob/master/Data/nyc-zip-codes.csv

StackOverFlow / Random Help
Saving a file 
- https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file 

Fetching over multiple pages
- https://stackoverflow.com/questions/40677764/how-to-fetch-data-over-multiple-pages 

Using Fetch within Node.js
- https://codemag.com/article/2003031

Opening a file synconously
- https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/

Source Material
Image Source
- https://andrewprokos.com/photo/black-and-white-panoramic-skyline-nyc-at-night-2745/
