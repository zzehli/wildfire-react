# Live Wildfire Watch with React 

This is project is uses NASA Earth Observatory Natural Event Tracker api to fetch weather data and place them onto Google Map with `google-map-react` package. This project is an extension of the tutorial by Brad Traversy.

## Demo
![Alt Text](demo.gif)

## Features
* Visualise current wildfire around the world
* Display detailed location infomation if available
* Toggle away info-box by clicking again

## To-be Implemented
* Implemented floating buttons on the side panel to select weathers, but the `google-map-react` package is not well documented, it does not seem to support changing location markers after initial launch at the moment (Update: wrestled a few hours more on this. It turns out it is possible to toggle away markers. But in my case, I think I would need to cache the API request and filter according to my criteria in order to make this function work. A demo without API call is [here](https://github.com/google-map-react/google-map-react/issues/993#issue-788674608).
