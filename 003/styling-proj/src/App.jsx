import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
    <Button/>    
    <Student name="Johnpaul" age={20} isStudent={true} />
    <Student name = "Patrick" age = {30} isStudent={false} />
    <Student name="Sandy" age={27} isStudent={true} />

    </>
  );
}

export default App
