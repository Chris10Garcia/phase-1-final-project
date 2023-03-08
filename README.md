# Phase 1 Final Project: New York City Brewery Database Website

![Preview of website functioning](https://github.com/Chris10Garcia/phase-1-final-project/blob/main/src/webpagevideo.mp4)

## Table of Content

1. [Overview](#overview)
2. [Get Started](#get-started)
3. [Acquiring the Data](#acquiring-the-data)
4. [Source and Credits](#source-and-credits)


## Overview

Using [Open Brewery DB's](https://www.openbrewerydb.org/) API, I created a webpage application that shows all of the breweries located in NYC. The way the site works is:
- The page first loads all of the breweries as a list.
- When you click the button to expand, details of the brewery are shown. This includes address, phone, neighborhood, borough, and website.
- You can filter the list by NYC boroughs or you can search by key terms.


## Get Started

- Clone the repo
- Install [json-server](https://github.com/typicode/json-server)
- Run `json-server --watch db.json`.
- Open `index.html`.
- Enjoy finding out local breweries of NYC!


## Acquiring the Data

Open brewery DB is a public API that is a database of all the breweries in the US. To filter this massive dataset down for only NYC breweries:
1. Wrote two script files that acquires the JSON data for NY state and then to build a new file for breweries located within NYC by comparing zip codes.
2. Found a CSV file that contains NYC's zip code and the borough plus neighborhood it corresponds to.
3. Converted the [CSV file to JSON](https://www.convertcsv.com/csv-to-json.htm) so that it is easier to work with.
4. Saved the file as db.json. This new file is then hosted on a json-server.

To see these script files, please navigate within the folder "other".


## Source and Credits

API used for this project
- [Open Brewery DB](https://www.openbrewerydb.org/documentation)


Material used from others:
- [NYC zip code as a CSV file](https://github.com/erikgregorywebb/nyc-housing/blob/master/Data/nyc-zip-codes.csv)

- [New York City Skyline Picture](https://andrewprokos.com/photo/black-and-white-panoramic-skyline-nyc-at-night-2745/)


Stack Overflow / Guides / Assistance to topics not covered within phase 1:

- [Saving a file](https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file)

- [Fetching over multiple pages](https://stackoverflow.com/questions/40677764/how-to-fetch-data-over-multiple-pages)

- [Using Fetch within Node.js](https://codemag.com/article/2003031)

- [Opening a file synconously](https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/)


JSON related assistance 

- [CSV file to JSON](https://www.convertcsv.com/csv-to-json.htm)

- [JSON Beautifier](https://codebeautify.org/jsonviewer)

