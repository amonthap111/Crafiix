

function Template() {
    return (
      <div className="Body">
        <div className="container-Login">
          <div className="left">
            <img src="" alt="logo" className="logo" />
            <h1 className="logo-txt">CRAFIIX</h1>
            <h2 className="DP-txt">LOGIN TO YOUR ACCOUNT</h2>
            
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" />
  
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" />
  
            <div className="link-container">
              <a href="#">สมัครสมาชิก</a>
              <a href="#">ลืมรหัสผ่าน</a>
            </div>
  
            <button onClick={() => alert('Logging in...')}>ลงชื่อเข้าใช้งาน</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
  
  export default Template;
  