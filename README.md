# Image Results Project

### Using React (Hooks)
## Features:

Tried to emulate google search results page and its features.

## Optimizations:
Added various optimizations to make the app faster and enhance user eexperience.

Some cool optimizations:
1. Fetching lower quality images (small size) from the backend to display on the gallery, to save resources.
2. When an image is clicked from the image gallery grid, showing a low-quality image for the side card, till the time being when the original (large size image) image is fetched and set to state to be displayed on the page card.
3. Canceling previous similar calls (if any) when any new API for fetching large size image is called, to get rid of inconsistent data.


## To setup and run:

npm install

npm start

