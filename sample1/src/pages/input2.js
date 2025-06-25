import React, { useState } from "react";

// 이벤트 바인딩
// 사용자 입력과 동시에 출력이 연결되어 화면에 표시됨

const Input2 = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", tel: "" });

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs, // name: '', email: '', tel: ''
      [id]: value,
    });
  };

  const { name, email, tel } = inputs;

  return (
    <>
      <label>이름</label>
      <input type="text" id="name" value={name} onChange={onChange} />
      <br />

      <label>이메일</label>
      <input type="text" id="email" value={email} onChange={onChange} />
      <br />

      <label>전화번호</label>
      <input type="text" id="tel" value={tel} onChange={onChange} />
      <br />

      <p>이름 : {name}</p>
      <p>전화번호 : {tel}</p>
      <p>이메일 : {email}</p>
    </>
  );
};

export default Input2;
