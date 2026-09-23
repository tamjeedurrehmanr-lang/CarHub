function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">

          <a className="navbar-brand" href="#">
            Car<span className="accent">Hub</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#buy-sell">
                  Buy Cars
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#buy-sell">
                  Sell Your Car
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#featured">
                  Featured
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  About
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <button className="btn btn-orange">
                  Login
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="container">

          <div className="row align-items-center g-4">

            {/* LEFT SIDE */}
            <div className="col-lg-6">

              <h1 className="display-5">
                Cars for sale in{' '}
                <span className="accent">
                  Pakistan
                </span>
              </h1>

              <p className="lead mb-4">
                Buy, sell and compare new and used cars in one place.
              </p>


              {/* SEARCH BOX */}
              <div className="bg-white p-3">

                <div className="row g-2">

                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brand or model"
                    />
                  </div>

                  <div className="col-md-4">
                    <select className="form-select">

                      <option>
                        All Cities
                      </option>

                      <option>
                        Islamabad
                      </option>

                      <option>
                        Rawalpindi
                      </option>

                      <option>
                        Peshawar
                      </option>

                      <option>
                        Lahore
                      </option>

                      <option>
                        Karachi
                      </option>

                    </select>
                  </div>

                  <div className="col-md-3 d-grid">

                    <button className="btn btn-orange">
                      Search
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE - CAROUSEL */}
            <div className="col-lg-6">

              <div
                id="heroCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >

                <div className="carousel-inner">

                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
                      className="d-block w-100"
                      alt="Toyota Camry"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
                      className="d-block w-100"
                      alt="Hyundai"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                      className="d-block w-100"
                      alt="BMW"
                    />
                  </div>

                </div>


                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>


                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BUY / SELL ================= */}
      <section className="py-5" id="buy-sell">

        <div className="container">

          <div className="row g-4">

            {/* BUY */}
            <div className="col-md-6">

              <div className="buy-box h-100">

                <h2>
                  Buy a Car
                </h2>

                <p>
                  Browse new and used cars from sellers in your city.
                </p>

                <button className="btn btn-orange">
                  Browse Cars
                </button>

              </div>

            </div>


            {/* SELL */}
            <div className="col-md-6">

              <div className="sell-box h-100">

                <h2>
                  Sell Your Car
                </h2>

                <p>
                  Post a free ad and get calls from real buyers.
                </p>

                <button className="btn btn-orange">
                  Post an Ad
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BRANDS ================= */}
      <section className="pb-5">

        <div className="container">

          <h2 className="section-title">
            Popular Brands
          </h2>

          <div className="row g-3">

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                Toyota
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                Honda
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                Suzuki
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                Kia
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                BMW
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a href="#" className="brand">
                Hyundai
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="pb-5">

        <div className="container">

          <h2 className="section-title">
            Browse by Body Type
          </h2>

          <div className="row g-3">

            <div className="col-6 col-md">
              <div className="category">
                <h5>Sedan</h5>
                <small>1,240 cars</small>
              </div>
            </div>

            <div className="col-6 col-md">
              <div className="category">
                <h5>SUV</h5>
                <small>860 cars</small>
              </div>
            </div>

            <div className="col-6 col-md">
              <div className="category">
                <h5>Hatchback</h5>
                <small>1,015 cars</small>
              </div>
            </div>

            <div className="col-6 col-md">
              <div className="category">
                <h5>Coupe</h5>
                <small>95 cars</small>
              </div>
            </div>

            <div className="col-6 col-md">
              <div className="category">
                <h5>Truck</h5>
                <small>140 cars</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED CARS ================= */}
      <section className="pb-5" id="featured">

        <div className="container">

          <h2 className="section-title">
            Featured Cars
          </h2>

          <div className="row g-4">


            {/* CAR 1 */}
            <div className="col-sm-6 col-lg-3">

              <div className="card h-100">

                <img
                  src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Toyota Camry"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Toyota Camry
                  </h5>

                  <p className="card-text text-muted">
                    2020 • Automatic • Petrol
                  </p>

                  <p className="price">
                    Rs. 11,200,000
                  </p>

                  <button className="btn btn-orange w-100">
                    View Details
                  </button>

                </div>

              </div>

            </div>


            {/* CAR 2 */}
            <div className="col-sm-6 col-lg-3">

              <div className="card h-100">

                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Suzuki Dzire"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Suzuki Dzire
                  </h5>

                  <p className="card-text text-muted">
                    2024 • Automatic • Petrol
                  </p>

                  <p className="price">
                    Rs. 4,100,000
                  </p>

                  <button className="btn btn-orange w-100">
                    View Details
                  </button>

                </div>

              </div>

            </div>


            {/* CAR 3 */}
            <div className="col-sm-6 col-lg-3">

              <div className="card h-100">

                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="BMW 3 Series"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    BMW 3 Series
                  </h5>

                  <p className="card-text text-muted">
                    2021 • Automatic • Petrol
                  </p>

                  <p className="price">
                    Rs. 8,500,000
                  </p>

                  <button className="btn btn-orange w-100">
                    View Details
                  </button>

                </div>

              </div>

            </div>


            {/* CAR 4 */}
            <div className="col-sm-6 col-lg-3">

              <div className="card h-100">

                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Honda Civic"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Honda Civic
                  </h5>

                  <p className="card-text text-muted">
                    2023 • Automatic • Petrol
                  </p>

                  <p className="price">
                    Rs. 6,500,000
                  </p>

                  <button className="btn btn-orange w-100">
                    View Details
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer id="footer">

        <div className="container">

          <div className="row g-4">

            <div className="col-md-5">

              <h4 className="text-white">
                Car<span className="accent">Hub</span>
              </h4>

              <p>
                Buy, sell and compare cars easily.
              </p>

            </div>


            <div className="col-6 col-md-3">

              <h6 className="text-white">
                Links
              </h6>

              <p className="mb-2">
                <a href="#buy-sell">
                  Buy Cars
                </a>
              </p>

              <p className="mb-2">
                <a href="#buy-sell">
                  Sell Your Car
                </a>
              </p>

              <p className="mb-2">
                <a href="#featured">
                  Featured Cars
                </a>
              </p>

            </div>

          </div>

          <hr />

          <p className="text-center small mb-0">
            © 2026 CarHub. All Rights Reserved.
          </p>

        </div>

      </footer>
    </>
  )
}

export default App