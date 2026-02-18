import { useContext } from "react";
import { UserContext } from "./DataContext";

export default function AllUsers() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h2 className="text-center">Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th><th>Name</th><th>Email</th><th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u,i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
