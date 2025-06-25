import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <>
      <label>이름</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label>이메일</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label>전화번호</label>
      <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
      <br />

      <p>이름 : {name}</p>
      <p>전화번호 : {tel}</p>
      <p>이메일 : {email}</p>
    </>
  );
};

export default Input;
