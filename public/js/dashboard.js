const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();
  
    if (title && contents) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        alert('Failed to create post');
      } 
    }
  };
  

  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

  