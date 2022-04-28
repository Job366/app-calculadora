import Formulario from "./Components/Formulario";


function App() {

  return (
    <div className="container">
      <div className="header_wrapper">
        <h1>. : C A L C U L A D O R A : .</h1>
      </div>

      <div className="content_wrapper">
          <Formulario />
      </div>

      <div className="sidebar">
        <div className="widget_box_wrapper">
          <div className="widget_box">
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
