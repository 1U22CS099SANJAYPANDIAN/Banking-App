import { useContext, useState } from "react";
import { UserContext } from "./DataContext";

export default function CreateUser() {
  const { users, setUsers } = useContext(UserContext);
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const handleSubmit = () => {
    if(!form.name || !form.email || !form.password){
      alert("Enter valid details");
      return;
    }
    setUsers([...users, { ...form, balance:0 }]);
    alert("User created");
  };

  return (
    <div className="col-md-4 mx-auto">
      <input className="form-control mb-2" placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}/>
      <input className="form-control mb-2" placeholder="Name"
        onChange={e=>setForm({...form,name:e.target.value})}/>
      <button className="btn btn-dark" onClick={handleSubmit}>Create user</button>
    </div>
  );
}
