import React from 'react';

export const Carrusel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide my-custom-carousel" data-bs-ride="carousel" style={{ minHeight: '300px', padding: '20px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/carrusel1.jpg" className="d-block w-100 img-fluid" alt="burgeruno" />
        </div>
        <div className="carousel-item">
          <img src="/img/carrusel2.jpg" className="d-block w-100 img-fluid" alt="burgerdos" />
        </div>
        <div className="carousel-item">
          <img src="/img/carrusel3.jpg" className="d-block w-100 img-fluid" alt="burgertres" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};