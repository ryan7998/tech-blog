async function editFormHandler(event) {
    event.preventDefault();
    // get post id from url http://localhost:3001/post/1 and split
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-body').value.trim();

    // console.log(title, post_content); return;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.replace('/dashboard');
    }else{
        alert(response.statusText);
    }
}

async function deleteFormHandler(event){
    event.preventDefault();
    // get post id from url http://localhost:3001/post/1 and split
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/dashboard');
    }else{
        alert(response.statusText);
    }
}
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);