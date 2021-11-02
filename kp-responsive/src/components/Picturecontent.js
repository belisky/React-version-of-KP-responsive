 
import brain from '../brain.jpg';
import kanban from '../kanban.jpg'

const Picturecontent = () => {
    return (
        <>
            <section className="bg-dark">
              <div className="container">
                <div className="split">
                  <div className="split_content">
                    <h2>Made custom for you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias quibusdam repudiandae officiis beatae. Itaque?</p>
                   </div>
                  <div className="split_img">
                    <img src={kanban} alt="ook you people,some picture keke" />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-primary">
              <div className="container">
                <div className="split">
                  <div className="split_img">
                    <img src={brain} alt="some another picture bi keke" />
                  </div>
                  <div className="split_content">
                    <h2>Something sweet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio sit similique inventore commodi eligendi?</p>
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Picturecontent
