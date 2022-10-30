import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";


const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      getUserById(userId).then((data) => {
        setUser(data);
        setLoading(false);
      });
    }, [userId]);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1 className="heading-user">Personal information:</h1>
        <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
        <div className="block-inf">
            <img src={user.image} alt=""/>
            <ul className="list-inf">
                <li>DirthDate: {user.birthDate}</li>
                <li>Age: {user.age}</li>
                <li>Gender: {user.gender}</li>
                   
            </ul>
        </div>
        <h3>Looks:</h3>
        <ul className="list-user">
                <li>Height: {user.height}</li>
                <li>Weight: {user.weight}</li>
                <li>Eye color: {user.eyeColor}</li>
                <li>Blood group: {user.bloodGroup}</li>
                <li>Hair color: {user.hair.color}</li>
                <li>Hair type: {user.hair.type}</li>
        </ul>
        <h3>Address of residence:</h3>
        <ul className="list-user"> 
            <li>Address: {user.address.address}</li>
            <li>City: {user.address.city}</li>
            <li>Postal code: {user.address.postalCode}</li>
            <li>State: {user.address.state}</li>
        </ul>
        <h3>Education:</h3>
        <ul className="list-user"> 
            <li>University: {user.university}</li>
            <li>City: {user.address.city}</li>
            <li>Postal code: {user.address.postalCode}</li>
            <li>State: {user.address.state}</li>
        </ul>
        <h3>Work:</h3>
        <ul className="list-user"> 
            <li>Name: {user.company.name}</li>
            <li>Title: {user.company.title}</li>
            <li>Department: {user.company.department}</li>
            <li>Address: {user.company.address.address}</li>
            <li>City: {user.company.address.city}</li>
            <li>Postal code: {user.company.address.postalCode}</li>
            <li>State: {user.company.address.state}</li>
        </ul>
        <h3>Bank:</h3>
        <ul className="list-user"> 
            <li>Card number: {user.bank.cardNumber}</li>
            <li>Currency: {user.bank.currency}</li>
            <li>Card type: {user.bank.cardType}</li>
        </ul>
        <Link to="/users" className="link-back">Back to Users</Link>
      </div>
    );
  };
  
  export default User;