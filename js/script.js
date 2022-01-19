const url = 'https://vue3-course-api.hexschool.io/v2/';
const path = 'tatw';

const emailInput = document.querySelector('#username');
const pwInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click', login);

// 登入
function login() {
  const username = emailInput.value;
  const password = pwInput.value;

  const user = {
    username,
    password
  }
  //登入，儲存token
  axios.post(`${url}/admin/signin`, user)
    .then((res) => {
      const { token, expired } = res.data;
      document.cookie = `tatw=${token}; expired=${new Date(expired)}; `;
      window.location = "/productList.html";
    })
    .catch((error) => {
      window.location='index.html';
      alert('帳號密碼錯誤，請重新輸入');
    })
}

