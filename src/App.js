import logo from './logo.svg';
import './App.scss';
import Headers from './lib/Headers'
import Series from './lib/Series'
import Banners from './lib/Banners'

function App() {
  return (
    <div className="App">
      <Headers/>
      <Banners /> 
      <Series rand="5" title="Amerikan Dizileri"/>
      <Series rand="120" title="Furkan, İzlemeye Devam Et"/>
      <Series rand="90" title="Gündemdekiler"/>
    </div>
  );
}

export default App;
