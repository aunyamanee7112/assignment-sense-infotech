import React, { useState } from "react";

interface IFromData {
  username:string,
  email:string,
  password:string
}

const FromDataComponent = () => {
  const [formData, setFromData] = useState<IFromData>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<IFromData>();

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, ...{ [name]: value } }));
  };
  const validate = () => {
    const newErrors= {} as IFromData
    if (!formData.username) newErrors.username = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationCheck = validate(); 
    setErrors(validationCheck)
  };

  return (
    <div>
      <form className="fromdata" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChangeData}
          />
          {errors?.username && <p style={{ color: 'red' }}>{errors?.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeData}
          />
          {errors?.email && <p style={{ color: 'red' }}>{errors?.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChangeData}
          />
          {errors?.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default FromDataComponent;
