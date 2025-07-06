import { useSelector } from 'react-redux';

const MyCases = () => {
  const { cases } = useSelector((state) => state.dashboard);

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">My Cases</h3>
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 border-b">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Type</th>
            <th className="p-2">Status</th>
            <th className="p-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.type}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">{item.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCases;
