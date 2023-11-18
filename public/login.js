
async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', username);
      //If user already exists in databse, import data automatically
      const userResponse = await fetch(`/api/user/` + username);
      let body = await userResponse.json();
      if (body.steamId) {
        localStorage.setItem('id', body.steamId);
      }
      window.location.href = 'tracker.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }