import React, { useEffect, useState } from 'react';

const Report = ({ expenses, budget }) => {
  const [monthlyReport, setMonthlyReport] = useState([]);

  // Calculate report whenever expenses or budget change
  useEffect(() => {
    const report = calculateReport(expenses, budget);
    setMonthlyReport(report);
  }, [expenses, budget]);

  // monthly report
  const calculateReport = (expenses, budget) => {
    const report = {};
    
    // Group expenses by month
    expenses.forEach((expense) => {
      const month = new Date(expense.date).toLocaleString('default', { month: 'long' });
      if (!report[month]) {
        report[month] = { totalSpendings: 0, overBudget: false };
      }
      report[month].totalSpendings += parseFloat(expense.amount);
    });

    // Checking if spendings are over budget
    return Object.keys(report).map((month) => ({
      month,
      totalSpendings: report[month].totalSpendings,
      overBudget: report[month].totalSpendings > budget,
    }));
  };

  return (
    <div className="report-container">
      <h2>Monthly Report</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Spendings</th>
            <th>Over Budget</th>
          </tr>
        </thead>
        <tbody>
          {monthlyReport.map((report, index) => (
            <tr key={index}>
              <td>{report.month}</td>
              <td>${report.totalSpendings.toFixed(2)}</td>
              <td>{report.overBudget ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;