function toogleMenu() {
  const projects = document.getElementById('menu');
  const open_projects_button = document.getElementById('open_menu');
  const close_projects_button = document.getElementById('close_menu');

  if (projects.style.display === 'flex') {
    close_projects_button.style.display = 'none';
    open_projects_button.style.display = 'flex';
    return projects.style.display = 'none';
  }
  projects.style.display = 'flex';
  close_projects_button.style.display = 'flex';
  open_projects_button.style.display = 'none';
}

function openPosts() {
  const recentPosts = document.getElementById('posts_recent');
  const open_posts_button = document.getElementById('open_posts');
  const close_posts_button = document.getElementById('close_posts');

  if (recentPosts.style.display === 'flex') {
    close_posts_button.style.display = 'none';
    open_posts_button.style.display = 'flex';
    return recentPosts.style.display = 'none';
  }
  recentPosts.style.display = 'flex';
  close_posts_button.style.display = 'flex';
  open_posts_button.style.display = 'none';
}
