import TextInput from '../TextInput'
import Button from '../Button'

const AddTareaInput = () => {
    return (
        <div className="grupo-entrada">
            <TextInput style="primary" placeholder="Agregar nueva tarea" />
            <Button variant="primary">Agregar</Button>
        </div>
    )
}

export default AddTareaInput;