/*

    Build a nested comment system where users 
    can leave comments on a post. Each comment 
    can have replies, creating a nested structure. 
    Users should be able to reply to comments 
    and collapse/expand comment threads.

*/


function uuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

const form = document.querySelector('form');
const commentsContainer = document.querySelector('#comments-container');

const commentList = [
    {
        id: uuid(),
        text: "My first comment",
        replies: ["Hey!", "How are you", "Lets connect"]
    },
    {
        id: uuid(),
        text: "My Second comment",
        replies: ["Second Hey!", "Second How are you", "Second Lets connect"]
    }
]

function addComment(commentText) {
    const newComment = {
        id: uuid(),
        text: commentText,
        replies: []
    }

    commentList.push(newComment);
    renderComments();
}

function addReply(commentId, replyText) {
    const comment = commentList.find((comment) => comment.id === commentId);
    comment.replies.push(replyText);
    renderComments();
}

function renderComments() {

    // reset the comments container to empty (clear of the UI)
    commentsContainer.innerHTML = '';

    for (let comment of commentList) {
        const article = document.createElement('article');
        article.classList.add('comment');
        
        const p = document.createElement('p');
        // set comment value to p
        p.innerText = comment.text;

        const ul = document.createElement('ul');
        for (let reply of comment.replies) {
            const li = document.createElement('li');
            li.innerText = reply;
            // add reply li to ul
            ul.append(li);
        }

        const textarea = document.createElement('textarea');
        const button = document.createElement('button');
        button.innerText = 'Reply';

        button.addEventListener('click', function () {
            const replyText = textarea.value;
            addReply(comment.id, replyText);
        })


        // add all the required elements to article container
        article.append(p);
        article.append(ul);
        article.append(textarea);
        article.append(button);

        // add the constructed article to commentsContainer
        commentsContainer.append(article);
    }
}

function setUpEventListeners() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = form.elements[0].value;
        addComment(commentText);
    });
}

function initialiseApp() {
    setUpEventListeners();
    renderComments();
}

initialiseApp();
