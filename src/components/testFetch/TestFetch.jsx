import React from "react";
import "./testFetchStyle.scss";

export class TestFetch extends React.Component {
  state = {
    data: null,
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  render() {
    const { data } = this.state;
    if (this.state.data) {
      return (
        <div>
          {data.map((items) => (
            <ul key={items.id}>
              <li>ID: {items.id}</li>
              <li>Name: {items.name}</li>
              <li>Usernme: {items.username}</li>
              <li>Email: {items.email}</li>
              <li>
                Adress
                <ul>
                  <li>Street: {items.address.street}</li>
                  <li>Suite: {items.address.suite}</li>
                  <li>City: {items.address.city}</li>
                  <li>Zipcode: {items.address.zipcode}</li>
                  <li>
                    Geo
                    <ul>
                      <li>lat: {items.address.geo.lat}</li>
                      <li>lng: {items.address.geo.lng}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
