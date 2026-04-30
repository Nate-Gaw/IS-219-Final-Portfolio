# Portfolio Homepage

This project is a static portfolio homepage built with plain HTML, CSS, and JavaScript.

## How to Run

Because the page loads shared components with `fetch()`, open it through a local web server instead of opening `index.html` directly from the file system.

### Option 1: Python

From the project root:

```powershell
cd "D:\College Classes\IS219\IS-219-Final-Portfolio"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

### Option 2: VS Code Live Server

1. Open the project folder in VS Code.
2. Install the Live Server extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.

## Project Structure

- `index.html` - main homepage shell
- `assets/css/` - global, layout, and component styles
- `assets/js/main.js` - loads reusable components
- `components/` - navbar, footer, and section partials
- `specs/` - build instructions, do not modify

## Notes

- The homepage currently uses placeholder content only.
- Do not edit files inside `specs/`; they are the source requirements for future work.