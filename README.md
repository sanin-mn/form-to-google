# form-to-google

[![npm version](https://badge.fury.io/js/form-to-google.svg)](https://badge.fury.io/js/form-to-google)
[![GitHub stars](https://img.shields.io/github/stars/sanin-mn/form-to-google.svg)](https://github.com/sanin-mn/form-to-google/stargazers)

##  Overview
`form-to-google` allows you to easily send data from an HTML form to a **Google Form** and have it saved to **Google Sheets** automatically. This is useful for integrating your website forms directly with Google Sheets without needing to write server-side code.

## 💻 Installation

To install the package, run:

```bash
npm install form-to-google
```
## Setup Guide

1. Create Google Form
Make a new form at ***Google Forms***

Add your questions (like "Name" and "Email")

2. Get Submission URL
Open your form

Right-click the Submit button → Inspect

Find the <form> tag

Copy the URL from the action attribute (ends with /formResponse)

Example URL:
`https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse`

3. Find Field IDs
Inspect each input field to find their name attributes (format: entry.XXXXXXXXXX)

Example:

html
<input type="text" name="entry.0000000">  <!-- Name field -->
<input type="email" name="entry.00000000"> <!-- Email field -->

4. Create HTML Form
html
<form id="contactForm">
  <input name="name" placeholder="Your Name" required>
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Submit</button>
</form>

5. Connect with form-to-google
javascript
import { connectForm } from 'form-to-google';

connectForm(document.getElementById('contactForm'), {
  googleFormUrl: 'YOUR_GOOGLE_FORM_URL',
  fieldMapping: {
    name: 'entry.0000000',   // Maps to Name field
    email: 'entry.00000000'   // Maps to Email field
  }
});

