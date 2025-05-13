# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the source code for Sophia Liau's personal website, which showcases her professional portfolio, personal interests, and interactive projects. The website is built using HTML, CSS, and JavaScript without any additional frameworks or build tools.

## Project Structure

- **HTML Files**: Core website pages including index, about, projects, resume, contact, personal, and an interactive Conway's Game of Life implementation
- **CSS Files**: Styling separated into multiple files (styles.css, styles-index.css, styles-personal.css)
- **JavaScript Files**: 
  - `script.js`: General website functionality
  - `conway.js`: Implementation of Conway's Game of Life cellular automaton

## Key Components

### Core Website
The website follows a consistent structure with a header navigation menu, content sections specific to each page, and a footer with social media links. The design uses a consistent color scheme and typography throughout.

### Conway's Game of Life
An interactive implementation of Conway's Game of Life cellular automaton accessible via the Conway page. Features include:
- Interactive grid where users can toggle cells by clicking
- Controls to start/stop the simulation
- Preset patterns (glider, Gosper glider gun)
- Random grid generation
- Generation counter in the page title

## Development Workflow

As this is a static website without a build system, files can be edited directly and viewed by opening the HTML files in a browser. To view changes while developing:

1. Edit the HTML, CSS, or JavaScript files
2. Open or refresh the HTML files in a browser to see changes

## Deployment

The website is deployed using GitHub Pages from this repository. Any changes pushed to the main branch will automatically be deployed to the live site at https://sophialiau.github.io/.

## Best Practices

When working with this codebase:

1. Maintain the existing design language and style patterns
2. Keep the navigation consistent across all pages
3. When adding new pages, follow the established HTML structure with proper header, navigation, and footer elements
4. Test all interactive elements across different browsers and screen sizes