import { useContext, useState } from "react";
import { UserContext } from "./DataContext";

export default function Withdraw() {
  const { users, setUsers } = useContext(UserContext);
  const [email,setEmail] = useState("");
  const [amount,setAmount] = useState("");

  const handleWithdraw = () => {
    const index = users.findIndex(u => u.email === email);
    if(index === -1 || amount <= 0) return alert("enter valid amount");
    if(users[index].balance < amount) return alert("Insufficient balance");

    users[index].balance -= Number(amount);
    setUsers([...users]);
    alert("Withdraw successful");
  };

  return (
    <div className="col-md-4 mx-auto">
      <input className="form-control mb-2" placeholder="Email"
        onChange={e=>setEmail(e.target.value)}/>
      <input className="form-control mb-2" placeholder="Amount"
        onChange={e=>setAmount(e.target.value)}/>
      <button className="btn btn-dark" onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
