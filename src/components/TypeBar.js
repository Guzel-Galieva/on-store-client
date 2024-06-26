import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const {product} = useContext(Context)

  return (
    <ListGroup className={"mt-5"} style={{ position: "fixed" }}>
        {product.types.map(type => 
            <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={type.id === product.selectedType.id}
                onClick={() => product.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
    </ListGroup>
  )
})

export default TypeBar