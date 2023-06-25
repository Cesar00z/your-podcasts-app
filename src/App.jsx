import './App.css'
import Navbar from './components/Navbar';
import Section1 from './components/Section1'
import CardServices from './components/CardServices'
function App() {

  return (
    <>
      <Navbar />
      <Section1 />
      <h2>Servicios</h2>
      <div className='container' id='servicios'>

        <CardServices
          img='https://images.pexels.com/photos/7600892/pexels-photo-7600892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

          title='Conceptualización de podcasts
          '
          info='Creamos conceptos innovadores y atractivos para el podcast de tu negocio. Nos enfocamos en contar historias que conecten con tu audiencia y generen interés.'
        />

        <CardServices
          img='https://images.pexels.com/photos/10660626/pexels-photo-10660626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

          title='Producción de audio de alta calidad'

          info='Contamos con un equipo de profesionales en producción de audio para asegurar la mayor calidad en la grabación y post-producción de tu podcast. Utilizamos equipos de última generación para asegurar el mejor sonido.'
        />

        <CardServices 
        img='https://images.pexels.com/photos/6878688/pexels-photo-6878688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

        title='Promoción y distribución del podcast'

        info='Una vez listo tu podcast, nos encargamos de la promoción y distribución en las plataformas digitales más importantes. Así aseguramos una mayor visibilidad y alcance del contenido que creamos para tu negocio.'
        />

      </div>

    </>
  )
}

export default App
