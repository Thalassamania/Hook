import { useParams } from "react-router-dom";
import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Mascota from "./mascota";

export default function Detail() {
 const params = useParams();
 const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
 var j = -1
 async function funcion(data){
  for (var i = 0; i < data.length; i++){
    if(parseInt(data[i]['id']) === parseInt(params.mascotaId)){
      //Funciona aca y no abajo
      console.log(data[i]['id'])
      j = i
      return data;
    }
  }}
 var mascotas = fetch(URL).then(async (data) => await data.json()).then( async data => await funcion(data));
 // Que?
 console.log(mascotas[j]['id']);
return (
  <div className="container">
    <Row>
      <Col key={mascotas[j]}>
      <Mascota mascota={mascotas[j]} />
      </Col>
    </Row>
  </div>
 );
}