function go(path){ window.location.href = path; }
function bindDemoLinks(){
  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.go)));
  const loginForm=document.querySelector('#loginForm');
  if(loginForm) loginForm.addEventListener('submit',e=>{e.preventDefault(); go('user/user-home.html');});
  const registerForm=document.querySelector('#registerForm');
  if(registerForm) registerForm.addEventListener('submit',e=>{e.preventDefault(); alert('สมัครสมาชิกสำเร็จ (ตัวอย่าง Frontend)'); go('index.html');});
  document.querySelectorAll('[data-demo-alert]').forEach(el=>el.addEventListener('click',()=>alert(el.dataset.demoAlert)));
}
document.addEventListener('DOMContentLoaded',bindDemoLinks);
