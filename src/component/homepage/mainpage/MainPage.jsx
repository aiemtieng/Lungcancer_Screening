import React, { useState } from "react";
import "./MainPage.css";
import { CiImageOn } from "react-icons/ci";

function MainPage() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      setImagePreviewUrl(e.target.result);
    }

    reader.readAsDataURL(file);
  }

  return (
    <div className="MainPage">
      <div className="textdescription">
        <h3>ระบบ AI ช่วยตรวจคัดกรองโรคมะเร็งปอด</h3>
        <p>
          การวินิจฉัยโรคมะเร็งปอดจากภาพรังสีทรวงอกด้วยปัญญาประดิษฐ์ในรูปแบบระบบโครงข่ายประสาทเทียมคอนโวลูชั่นแบบพื้นฐาน
        </p>
      </div>

      <div className="mainpageinputimage">
        <CiImageOn style={{ fontSize: "70px", color: "white", position: "fixed", top: "38%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <input
          className="inputfileimage"
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <button
          className="buttoninputfileimage"
          onClick={() => document.getElementById("file").click()}
        >
          อัพโหลดรูปภาพ
        </button>
        {imagePreviewUrl && <img className="imgpreview" id="preview" src={imagePreviewUrl} alt="Preview" />}
      </div>

      <div className="imgprocess">
        <button className="buttonimgprocess">ประมวลผลภาพ</button>
      </div>
    </div>
  );
}

export default MainPage;
