# Image Results Project

### Using React (Hooks)
## Features:

Tried to emulate google search results page and its features.

## Optimisations:
Added various optimisations to make the app faster and enhance user eexperience.

Some cool optimisations:
1. Fetching lower quality images (small size) from backend to display on gallery, to save resources.
2. When any image is clicked from image gallery grid, showing low quality image for side card, till the time being when original (large size image) image is fetched and set to state to be displayed on page card.
3. Cancel previous similar calls (if any) when any new api for fetching large size image is called, to get rid of inconsitent data.


## To setup and run:

npm install

npm start

