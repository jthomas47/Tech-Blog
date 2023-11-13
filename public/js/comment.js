const commentBtn = document.getElementById('comment'); 

const addComment = async (event) => {
    event.preventDefault();
    const contents = document.querySelector('#com').value.trim();
    const blog_id = commentBtn.dataset.id; 
    console.log(commentBtn.dataset.id); 
    if (contents) {
      console.log('fired');
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ contents, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.reload(); 
      } else {
        console.log(response);
        alert(response.statusText);
      }
    }
  };
  
  
  commentBtn.addEventListener('click',  addComment);







