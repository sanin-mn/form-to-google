# form-to-google

[![npm version](https://badge.fury.io/js/form-to-google.svg)](https://badge.fury.io/js/form-to-google)
[![GitHub stars](https://img.shields.io/github/stars/sanin-mn/form-to-google.svg)](https://github.com/sanin-mn/form-to-google/stargazers)

##  Overview
`form-to-google` allows you to easily send data from an HTML form to a **Google Form** and have it saved to **Google Sheets** automatically. This is useful for integrating your website forms directly with Google Sheets without needing to write server-side code.

## 💻 Installation

To install the package, run:

```bash
npm install form-to-google

Or using yarn:
yarn add form-to-google

🚀 Full Setup Guide
Follow these steps to fully connect your HTML form to Google Forms:

1. Create a Google Form
Visit Google Forms and create a new form.

Add your required questions, e.g., "Name" and "Email".

Example:

Question 1: Name

Question 2: Email

2. Get the Google Form POST URL
Open your form.

Right-click the Submit button and click Inspect.

Find the <form> tag.

Copy the URL from the action attribute.
It will look something like:

ruby
Copy
Edit
https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
✅ Make sure it ends with /formResponse, not /viewform.

3. Find Field Entry IDs
Each field in the Google Form has an ID like entry.1234567890.

Inspect the input elements in your Google Form.

Find the name attribute, which looks like entry.xxxxxxx.

Example fields:

html
Copy
Edit
<input type="text" name="entry.00000000000">
<input type="email" name="entry.0000000000">
✅ You will use these IDs for mapping your HTML form fields.

4. Build Your HTML Form
Create a basic HTML form on your website:

html
Copy
Edit
<form id="contactForm">
  <input name="name" placeholder="Your Name" required />
  <input name="email" type="email" placeholder="Your Email" required />
  <button type="submit">Submit</button>
</form>
5. Connect the Form Using form-to-google
Import and use the connectForm function:

html
Copy
Edit
<script type="module">
  import { connectForm } from 'form-to-google';

  const form = document.getElementById('contactForm');

  connectForm(form, {
    googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', // Replace with your real Google Form URL
    fieldMapping: {
      name: 'entry.1234567890',   // Replace with actual entry ID for 'Name'
      email: 'entry.0987654321'   // Replace with actual entry ID for 'Email'
    }
  });
</script>
✅ Now, when a user submits your form, the data will be sent directly to Google Sheets via your Google Form!


