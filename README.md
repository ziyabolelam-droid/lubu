Lebu+ is a responsive website that allows users to explore movies and series. I created it for my Principles of Web Design assignment to help users find movies, filter titles by genre, type and year, and save their favourite titles.

## Pages
- `index.html` — The home page, which displays featured movies and series.
- `browse.html` — Allows users to search for movies and filter them by genre, type and year.
- `mylist.html` — Displays the movies and series saved by the user.
- `about.html` — Provides information about the website and answers common questions.
- `signin.html` — Allows users to sign in to a local demo profile.

## How to Run the Website
The website uses the Fetch API to load movie information from `data/catalogue.json`. To make sure everything works correctly, the website should be opened using a local server.

To run it using Python, open the project folder in a terminal and type:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. You can also use the Live Server extension in Visual Studio Code.

## Additional Information
- The sign-in page is for demonstration purposes only and does not provide secure authentication.
- The website uses localStorage to save the user's list and profile information in the current browser.
- Lebu+ helps users discover movies and series but does not host or stream videos.
- The website has not been hosted online.
- The `REPORT.md` file contains more information about the project and its testing.