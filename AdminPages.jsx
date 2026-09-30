function AdminFrame({ children, records = false }) {
  return (
    <div className={`admin-page${records ? " records-page" : ""}`}>
      <main>{children}</main>
    </div>
  );
}

function LoginPage({ role, recordsHref, manageLabel, emailAutocomplete = "email" }) {
  const roleId = role.toLowerCase();

  return (
    <AdminFrame>
      <p className="brand">Car<span className="accent">Hub</span></p>
      <section className="panel" aria-labelledby="page-title">
        <h1 id="page-title">{role} sign in</h1>
        <p className="intro">Sign in to your CarHub {role.toLowerCase()} account.</p>

        <form>
          <div className="field">
            <label htmlFor={`${roleId}-email`}>Email address</label>
            <input
              id={`${roleId}-email`}
              name="email"
              type="email"
              autoComplete={emailAutocomplete}
              required
            />
          </div>
          <div className="field">
            <label htmlFor={`${roleId}-password`}>Password</label>
            <input
              id={`${roleId}-password`}
              name="password"
              type="password"
              autoComplete="current-password"
              minLength={6}
              required
            />
          </div>
          <div className="remember">
            <input id={`${roleId}-remember`} name="remember" type="checkbox" />
            <label htmlFor={`${roleId}-remember`}>Remember me</label>
          </div>
          <button className="submit" type="button">Sign in</button>
        </form>
        <p className="note">Account login needs a server to work.</p>
        <a className="admin-link" href={recordsHref}>{manageLabel}</a>
      </section>
      <footer>Buy, sell and compare cars with CarHub.</footer>
    </AdminFrame>
  );
}

export function AdminLoginPage() {
  return (
    <LoginPage
      role="Admin"
      emailAutocomplete="username"
      recordsHref="admin-records.html"
      manageLabel="Manage users and car listings"
    />
  );
}

export function BuyerLoginPage() {
  return (
    <LoginPage
      role="Buyer"
      recordsHref="buyer-records.html"
      manageLabel="Manage my profile and saved cars"
    />
  );
}

export function SellerLoginPage() {
  return (
    <LoginPage
      role="Seller"
      recordsHref="seller-records.html"
      manageLabel="Manage my car listings"
    />
  );
}

function RecordsPage({ title, intro, backHref, backLabel, children }) {
  return (
    <AdminFrame records>
      <p className="brand">Car<span className="accent">Hub</span></p>
      <h1>{title}</h1>
      <p className="intro">{intro}</p>
      <a href={backHref}>{backLabel}</a>
      {children}
    </AdminFrame>
  );
}

function RecordTable({ title, headers, rows }) {
  return (
    <section className="record-card record-table">
      <h2>{title}</h2>
      <div className="record-list">
        <table>
          <thead>
            <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AdminRecordsPage() {
  return (
    <RecordsPage
      title="Users and car listings"
      intro="Four simple forms for managing users and car listings."
      backHref="login1.html"
      backLabel="Back to Admin login"
    >
      <div className="record-grid">
        <section className="record-card">
          <h2>Add a record</h2>
          <form id="add-form">
            <label htmlFor="new-type">Record type</label>
            <select id="new-type" name="type">
              <option value="user">User</option>
              <option value="listing">Car listing</option>
            </select>
            <label htmlFor="new-name">Name or car model</label>
            <input id="new-name" name="name" type="text" required />
            <label htmlFor="new-email">User email (users only)</label>
            <input id="new-email" name="email" type="email" />
            <label htmlFor="new-price">Car price (listings only)</label>
            <input id="new-price" name="price" type="number" min="0" step="1" />
            <button type="button">Add record</button>
          </form>
        </section>

        <section className="record-card">
          <h2>View records</h2>
          <form id="view-form">
            <label htmlFor="view-type">Show</label>
            <select id="view-type" name="type">
              <option value="all">All records</option>
              <option value="user">Users</option>
              <option value="listing">Car listings</option>
            </select>
            <button type="button">View records</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Edit or approve a record</h2>
          <form id="edit-form">
            <label htmlFor="edit-id">Record ID</label>
            <input id="edit-id" name="id" type="number" min="1" required />
            <label htmlFor="edit-name">New name or car model</label>
            <input id="edit-name" name="name" type="text" />
            <label htmlFor="edit-email">New user email (users only)</label>
            <input id="edit-email" name="email" type="email" />
            <label htmlFor="edit-price">New car price (listings only)</label>
            <input id="edit-price" name="price" type="number" min="0" step="1" />
            <label htmlFor="edit-status">Status</label>
            <select id="edit-status" name="status">
              <option value="">Keep current status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
            <button type="button">Save changes</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Delete a record</h2>
          <form id="delete-form">
            <label htmlFor="delete-id">Record ID</label>
            <input id="delete-id" name="id" type="number" min="1" required />
            <button type="button">Delete record</button>
          </form>
        </section>
      </div>

      <p className="records-message">These HTML forms show the CRUD steps. A server or database is needed to save changes.</p>
      <RecordTable
        title="Car listings"
        headers={["ID", "Car model", "Seller", "Price", "Status"]}
        rows={[
          ["1", "Toyota Corolla 2022", "Ahmed Khan", "Rs. 4,500,000", "Pending"],
          ["2", "Honda Civic 2021", "Ayesha Malik", "Rs. 7,800,000", "Approved"],
          ["3", "Suzuki Alto 2023", "Ali Raza", "Rs. 2,400,000", "Active"],
        ]}
      />
    </RecordsPage>
  );
}

export function BuyerRecordsPage() {
  return (
    <RecordsPage
      title="Buyer profile and saved cars"
      intro="Register and manage your profile and saved cars."
      backHref="buyer.html"
      backLabel="Back to Buyer login"
    >
      <div className="record-grid">
        <section className="record-card">
          <h2>Register profile / save car</h2>
          <form>
            <label htmlFor="buyer-name">Your name</label>
            <input id="buyer-name" name="name" type="text" autoComplete="name" required />
            <label htmlFor="buyer-email">Email address</label>
            <input id="buyer-email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="saved-car">Car to save</label>
            <input id="saved-car" name="car" type="text" />
            <button type="button">Save profile and car</button>
          </form>
        </section>

        <section className="record-card">
          <h2>View profile and cars</h2>
          <form>
            <label htmlFor="profile-id">Profile ID</label>
            <input id="profile-id" name="id" type="number" min="1" required />
            <button type="button">View profile and cars</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Edit profile</h2>
          <form>
            <label htmlFor="edit-profile-id">Profile ID</label>
            <input id="edit-profile-id" name="id" type="number" min="1" required />
            <label htmlFor="edit-buyer-name">New name</label>
            <input id="edit-buyer-name" name="name" type="text" />
            <label htmlFor="edit-buyer-email">New email address</label>
            <input id="edit-buyer-email" name="email" type="email" />
            <button type="button">Save changes</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Remove saved car</h2>
          <form>
            <label htmlFor="saved-car-id">Saved car ID</label>
            <input id="saved-car-id" name="id" type="number" min="1" required />
            <button type="button">Remove car</button>
          </form>
        </section>
      </div>

      <p className="records-message">These HTML forms show the CRUD steps. A server or database is needed to save changes.</p>
      <RecordTable
        title="Buyer profile"
        headers={["ID", "Name", "Email"]}
        rows={[["1", "Sara Ahmed", "sara@example.com"]]}
      />
      <RecordTable
        title="Saved cars"
        headers={["ID", "Car model", "Year", "Price"]}
        rows={[
          ["1", "Toyota Corolla", "2022", "Rs. 4,500,000"],
          ["2", "Honda Civic", "2021", "Rs. 7,800,000"],
          ["3", "Suzuki Alto", "2023", "Rs. 2,400,000"],
        ]}
      />
    </RecordsPage>
  );
}

export function SellerRecordsPage() {
  return (
    <RecordsPage
      title="My car listings"
      intro="Add, view, edit, and delete your car listings."
      backHref="Seller.html"
      backLabel="Back to Seller login"
    >
      <div className="record-grid">
        <section className="record-card">
          <h2>Add car</h2>
          <form>
            <label htmlFor="new-model">Car model</label>
            <input id="new-model" name="model" type="text" required />
            <label htmlFor="new-year">Year</label>
            <input id="new-year" name="year" type="number" min="1900" max="2100" required />
            <label htmlFor="new-price">Price</label>
            <input id="new-price" name="price" type="number" min="0" step="1" required />
            <button type="button">Add car</button>
          </form>
        </section>

        <section className="record-card">
          <h2>View listings</h2>
          <form>
            <label htmlFor="view-status">Listing status</label>
            <select id="view-status" name="status">
              <option value="all">All listings</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Active">Active</option>
            </select>
            <button type="button">View listings</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Edit car details</h2>
          <form>
            <label htmlFor="edit-id">Car ID</label>
            <input id="edit-id" name="id" type="number" min="1" required />
            <label htmlFor="edit-model">Car model</label>
            <input id="edit-model" name="model" type="text" />
            <label htmlFor="edit-year">Year</label>
            <input id="edit-year" name="year" type="number" min="1900" max="2100" />
            <label htmlFor="edit-price">Price</label>
            <input id="edit-price" name="price" type="number" min="0" step="1" />
            <label htmlFor="edit-status">Status</label>
            <select id="edit-status" name="status">
              <option value="">Keep current status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Active">Active</option>
            </select>
            <button type="button">Save changes</button>
          </form>
        </section>

        <section className="record-card">
          <h2>Delete car listing</h2>
          <form>
            <label htmlFor="delete-id">Car ID</label>
            <input id="delete-id" name="id" type="number" min="1" required />
            <button type="button">Delete listing</button>
          </form>
        </section>
      </div>

      <p className="records-message">These HTML forms show the CRUD steps. A server or database is needed to save changes.</p>
      <RecordTable
        title="My listings"
        headers={["ID", "Car model", "Year", "Price", "Status"]}
        rows={[
          ["1", "Toyota Corolla", "2022", "Rs. 4,500,000", "Pending"],
          ["2", "Honda Civic", "2021", "Rs. 7,800,000", "Approved"],
          ["3", "Suzuki Alto", "2023", "Rs. 2,400,000", "Active"],
        ]}
      />
    </RecordsPage>
  );
}