    const form = document.getElementById('surveyForm');
    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(form);
      const entries = {};
      // For checkboxes with same name multiple values, collect as array
      formData.forEach((value, key) => {
        if (key === 'coping_mechanisms') {
          if (!entries[key]) {
            entries[key] = [];
          }
          entries[key].push(value);
        } else {
          entries[key] = value;
        }
      });

      let copingText = entries.coping_mechanisms ? entries.coping_mechanisms.join(', ') : 'None';

      alert(
        'Thank you for completing the survey, ' + entries.name + '!\n\n' +
        'Mental Health Status: ' + entries.mental_health + '\n' +
        'Coping Mechanisms: ' + copingText + '\n\n' +
        'We appreciate your input to help support mental health awareness.'
      );

      // Optionally, clear the form after submission
      form.reset();
    });