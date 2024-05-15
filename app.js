
function add()
{

  const form = document.getElementById('post-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    if (response.ok) {
      message.textContent = 'Post successfully created!';
      message.style.color = 'green';
    } else {
      message.textContent = 'Error creating post.';
      message.style.color = 'red';
    }
  } catch (error) {
    message.textContent = 'Error creating post: ' + error;
    message.style.color = 'red';
  }
});
}

