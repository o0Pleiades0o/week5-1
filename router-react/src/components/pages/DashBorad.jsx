import React from 'react';

const DashBorad = () => {
  // Sample data for the dashboard
  const recentOrders = [
    { id: 1, customer: "John Doe", amount: "$120.00", status: "Completed", email: "john@example.com", date: "2024-02-15", product: "Premium Package" },
    { id: 2, customer: "Jane Smith", amount: "$85.50", status: "Pending", email: "jane@example.com", date: "2024-02-14", product: "Basic Package" },
    { id: 3, customer: "Bob Wilson", amount: "$250.00", status: "Processing", email: "bob@example.com", date: "2024-02-13", product: "Enterprise Solution" }
  ];

  const stats = [
    { title: "Total Sales", value: "$12,850", change: "+12%" },
    { title: "Total Orders", value: "384", change: "+8%" },
    { title: "Average Order", value: "$86", change: "+3%" },
    { title: "Customers", value: "1,240", change: "+15%" }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 d-none d-md-block bg-dark min-vh-100 p-3">
          <h5 className="text-white">Dashboard</h5>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <a className="nav-link text-white active" href="#">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Settings</a>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="col-md-10 p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Dashboard Overview</h2>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary">Export</button>
              <button className="btn btn-primary">+ New Order</button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="row mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{stat.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="card-title mb-0">{stat.value}</h3>
                      <span className={`badge ${stat.change.includes('+') ? 'bg-success' : 'bg-danger'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="mb-0">Recent Orders</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.email}</td>
                        <td>{order.product}</td>
                        <td>{order.amount}</td>
                        <td>{order.date}</td>
                        <td>
                          <span className={`badge ${
                            order.status === 'Completed' ? 'bg-success' :
                            order.status === 'Pending' ? 'bg-warning' :
                            'bg-info'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2">View</button>
                          <button className="btn btn-sm btn-outline-secondary">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBorad;