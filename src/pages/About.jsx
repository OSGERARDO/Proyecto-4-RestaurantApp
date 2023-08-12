import './About.css';

export const About = () => {
    return (
        <>
      <section className="about-us">
      <div className="container">
        <div className="card">
          <img
            src="img/aboutus.jpg" 
            alt="Dev Burgers - Innovación y Sabor"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">Acerca de Nosotros</h2>
            <p>
              En Dev Burgers, no solo servimos hamburguesas, sino que también
              estamos dedicados a elevar tus papilas gustativas a otro nivel.
              Nuestra innovadora temática de hamburguesas para programadores
              combina dos pasiones: la codificación y el sabor exquisito.
              Imagina hincarle el diente a la JavaScript Burger, con sus capas
              de ingredientes sabrosos y dinámicos que se mezclan en armonía.
              ¿O tal vez te tienta la Python Burger, con su combinación de
              sabores tan versátil como el propio lenguaje? Nuestro equipo está
              compuesto por apasionados de la programación y amantes de la
              comida, quienes han unido fuerzas para crear una experiencia
              gastronómica única. Cada hamburguesa está diseñada para reflejar
              la esencia de un lenguaje de programación y deleitar tus sentidos.
              ¡Ven a Dev Burgers y déjate sorprender por cómo los códigos y los
              sabores se entrelazan en cada bocado!
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
