import React from "react";
import "./MainPage.css";
import { CiImageOn } from "react-icons/ci";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="textdescription">
        <h3>ระบบ AI ช่วยตรวจคัดกรองโรคมะเร็งปอด</h3>
        <p>
          การวินิจฉัยโรคมะเร็งปอดจากภาพรังสีทรวงอกด้วยปัญญาประดิษฐ์ในรูปแบบระบบโครงข่ายประสาทเทียมคอนโวลูชั่นแบบพื้นฐาน
        </p>
      </div>

      <div className="mainpageinputimage">
        <CiImageOn style={{ fontSize: "70px",color:"white",position: "fixed",top:"38%",left: "50%",transform:"translate(-50%, -50%)" }} />
        <input
          className="inputfileimage"
          type="file"
          id="file"
          style={{ display: "none" }}
        />
        <button
          className="buttoninputfileimage"
          onClick={() => document.getElementById("file").click()}
        >
          อัพโหลดรูปภาพ
        </button>
      </div>

      <div className="imgprocess">
        <button className="buttonimgprocess">ประมวลผลภาพ</button>
      </div>
    </div>
  );
}

export default MainPage;
