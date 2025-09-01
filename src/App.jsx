import './App.css'
import AddTareaInput from './components/AddTareaInput'
import MainLayout from './components/MainLayout'
import TablaTareas from './components/TablaTareas'

function App() {
  return (
    <div>
      <MainLayout titulo="Lista de tareas de Lázaro" >
        <AddTareaInput />
        <TablaTareas tareas = {[
          "Completar ejercicios de React",
          "Preparar presentación del proyecto",
          "Revisar documentación de JavaScript"
        ]}/>
      </MainLayout>
    </div>
  )
}

export default App