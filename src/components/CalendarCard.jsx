const CalendarCard = () => {
  return (
    <div className="card mb-0">
      <div className="card-body pb-2">
        <h5 className="card-title mb-2">January 2023</h5>
        <table className="table table-bordered text-center m-0">
          <thead>
            <tr className="table-light">
              <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td><td>1</td><td>2</td><td>3</td><td>4</td><td className="bg-primary text-white">5</td><td>6</td>
            </tr>
            <tr>
              <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CalendarCard;
