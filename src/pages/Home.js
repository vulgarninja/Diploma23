import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { ref, getDownloadURL } from 'firebase/storage'
import { useState, useEffect, useContext } from 'react'
import { StorageContext } from "../contexts/StorageContext"

export function Home ( props ) {
  const [ books, setBooks ] = useState([])

  const Storage = useContext( StorageContext )

  useEffect( () => {
    setBooks( props.items )
  }, [props.items])

  // collection
  const Items = books.map( (item, key) => {
    return (
      <Col md="4" key={key}>
        <Card>
          <Card.Body>
            <Card.Title>{item.book_title}</Card.Title>
            <Card.Text>
              By {item.author}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {Items}
      </Row>
    </Container>
  )
}