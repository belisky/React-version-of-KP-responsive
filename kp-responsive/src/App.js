 
import './Styles.css';
import brain from "./brain.jpg";
//import kanban from "./kanban.jpg";

function App() {
  return (
    <div>
       <header className="bg-light text-center">
         <div className="container container--narrow">
           <p>Lorem, ipsum dolor.</p>
           <h1>Responsive layouts don't have to be a struggle</h1>
         </div>
        </header>
       <section className="bg-white">
         <div className="container">
           <h2 className="text-center">Quality Designs</h2>
           <div className="split">
             <div>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam similique corporis dolorem eaque odit eos, ipsam voluptates reiciendis rerum inventore est. Est, cupiditate reprehenderit.</p>
             </div>
             <div>
               <p>Dolor rerum excepturi odio quis? Cumque repellendus ratione nihil repellat suscipit corporis at veniam, soluta labore, adipisci expedita excepturi. Aspernatur quia magni hic est excepturi.</p>
             </div>
           </div>
         </div>
        </section>
        <section className="bg-dark">
          <div className="container">
            <div className="split">
              <div>
                <h2>Made custom for you</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero in fugit enim eius aliquam minima.</p>
              </div>
              <div>
                <img src={brain} alt="some picture keke" />
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
    </div>
  );
}

export default App;
