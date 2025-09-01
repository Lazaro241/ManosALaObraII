import CheckboxInput from "../CheckboxInput"
import Button from "../Button"

const ItemTarea = ({tarea}) => {
    return (
        <tr>
            <td><CheckboxInput/></td>
            <td>{tarea}</td>
            <td>
              <Button variant="danger">Eliminar</Button>
            </td>
          </tr>
    )
}

export default ItemTarea;