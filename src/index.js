

export function connectForm(htmlForm, { googleFormUrl, fieldMapping }) {
    if (!htmlForm || !googleFormUrl || !fieldMapping) {
      throw new Error("Missing required parameters: htmlForm, googleFormUrl, fieldMapping");
    }
  
    htmlForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const formData = new FormData(htmlForm);
      const payload = new URLSearchParams();
  
      for (const [htmlName, value] of formData.entries()) {
        const googleFieldName = fieldMapping[htmlName];
        if (googleFieldName) {
          payload.append(googleFieldName, value);
        }
      }
  
      try {
        await fetch(googleFormUrl, {
          method: 'POST',
          body: payload,
          mode: 'no-cors', 
        });
      } catch (err) {
        console.error('Form submission failed', err);
      }
    });
  }
  