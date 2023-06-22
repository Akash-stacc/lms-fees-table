const PaymentHistoryTable = () => {
  // Here, you can define your table data and logic
  const tableData = [
    { studentName: "John Doe", paymentAmount: 100, paymentDate: "2023-06-01" },
    {
      studentName: "Jane Smith",
      paymentAmount: 150,
      paymentDate: "2023-06-05",
    },
    // Add more payment records as needed
  ];

  return (
    <div>
      <h2>Payment History Table</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Payment Amount</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((record, index) => (
            <tr key={index}>
              <td>{record.studentName}</td>
              <td>{record.paymentAmount}</td>
              <td>{record.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
