import React from "react";
import { Table } from "react-bootstrap";

const ChefList = () => {
  return (
    <section>
       <h1 className="text-center text-info mt-3 mb-4">Our Experienced Chefs Extra-Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th >Serial no.</th>
            <th >Name</th>
            <th>Address</th>
            <th>Email</th>
            {/* <th className="text-center">Email</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gordon Ramsay</td>
            <td>Newyork 32</td>
            <td>gordon23@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bobby Flay</td>
            <td>carlonia 87</td>
            <td>boby123@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td >Ina Garten</td>
            <td>Miami 47</td>
            <td>ina.k3@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td >Alice Waters</td>
            <td>Las-vegas -57</td>
            <td>alice333@gmail.com</td>
          </tr>
          <tr>
            <td>5</td>
            <td >Wolfgang Puck</td>
            <td>Frankfort 23</td>
            <td>Wolfgang56@gmail.com</td>
          </tr>
          <tr>
            <td>6</td>
            <td >Anthony Bourdain</td>
            <td>Indiano-64</td>
            <td>anthony89@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default ChefList;
