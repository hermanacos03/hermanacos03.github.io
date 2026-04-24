# Networking Project 2 - Secure, Optimize, and Monitor Your Website

## Overview
This project is a continuation of my original website, which was first created to explain basic computer networking concepts. For Project 2, I enhanced the website by adding security, performance, monitoring, and deployment improvements.

The website covers core networking ideas such as DNS, IP addressing, HTTP vs HTTPS, and TCP/IP. The purpose of this project was to take an existing website and improve it using practical web and networking techniques.

## Live Website
https://hermanacos03.github.io/

## GitHub Repository
https://github.com/hermanacos03/hermanacos03.github.io

## Project Enhancements

### 1. Security Enhancements
- HTTPS is enabled through GitHub Pages
- Added a Content Security Policy (CSP) in the HTML head
- Added a referrer policy for safer browser requests

### 2. Performance Optimization
- Added lazy loading to gallery images
- Kept lazy loading on the embedded Google Map
- Deferred Bootstrap JavaScript loading

### 3. Monitoring
- Added Google Analytics code to support traffic monitoring and visitor analysis

### 4. Deployment / Infrastructure
- Hosted publicly through GitHub Pages
- Added Docker support so the website can also run in a containerized environment

## Main Files
- `index.html` - main webpage
- `style.css` - main styling
- `blog.css` - additional styling
- `dockerfile` - Docker setup
- `Readme.md` - project documentation

## How to Run the Project

### Option 1: Open directly
Open `index.html` in a browser.

### Option 2: Run with Docker
Build the image:
```bash
docker build -t networking-project .