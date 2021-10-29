 
import brain from '../brain.jpg';
import kanban from '../kanban.jpg'

const Picturecontent = () => {
    return (
        <>
            <section className="bg-dark">
              <div className="container">
                <div className="split">
                  <div>
                    <h2>Made custom for you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero in fugit enim eius aliquam minima.</p>
                  </div>
                  <div>
                    <img src={kanban} alt="some picture keke" />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-primary">
              <div className="container">
                <div className="split">
                  <div>
                    <img src={brain} alt="some another picture bi keke" />
                  </div>
                  <div>
                    <h2>Something sweet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis in non culpa. Minima porro esse illo ducimus tempora totam.</p>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Picturecontent
