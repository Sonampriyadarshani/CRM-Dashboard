import React from "react";
import { useSelector } from "react-redux";

const CasesTable = () => {
  const { cases } = useSelector((state) => state.dashboard);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h6 className="card-title mb-3">My Cases</h6>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  <span
                    className={`badge bg-${
                      item.status === "Done" ? "success" : "warning"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasesTable;
