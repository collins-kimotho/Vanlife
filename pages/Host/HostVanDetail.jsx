import React from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = React.useState({});

  const { id } = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentVan(data.vans);
      });
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr;
        <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} width={150} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h2>{currentVan.name}</h2>
            <p>$ {currentVan.price}</p>
          </div>
        </div>

        <nav className="host-nav-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
