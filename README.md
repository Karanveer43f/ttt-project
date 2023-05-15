Library used to create the bar-graph: react-apexcharts

Library used to create the histogram: react-google-charts

Library used to create the csv download link: react-csv

## My Approach for the question

A bar-graph gives a better visual representation for the viewers, so I added a bar graph along with the histogram which was mentioned in the question

## Explaining the components

# App.js -

This component fetches the data from the url which clicked upon the submit button and then passes the data to the next two components via props

# chart.js-

This component is responsible for creating the bar graph. Properties of this bar graph have been tweaked to match the overall dark theme for the website. The basic guide on how to use this graph is mentioned on their docs and that's where I got all the help from.

# chart2.js-

This component is responsible for creating the Histogram. Properties of this bar graph have been tweaked to match the overall dark theme for the website.The basic guide on how to use this graph is mentioned on their docs and that's where I got all the help from.

# Aesthetics of the website

I love dark theme in websites, so I decided to make this website in the dark theme. All the css in present in app.css, whilst the graph libraries give their own options to match their graphs to our dark themed website.
