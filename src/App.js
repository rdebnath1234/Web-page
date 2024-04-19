/**
 * This component renders a greeting to the user.
 *
 * @param {string} name Riya Debnath.
 * @returns {ReactNode} A React element that renders a greeting to the user.
 */
import Login from './components/login';
import Login12 from './components/login12';
import Login22 from './components/login22';

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Login12/> */}
      <Login22/>
    </div>
  );
}
export default App;
