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
                <li key={user.id}>DirthDate: {user.birthDate}</li>
                <li key={user.id}>Age: {user.age}</li>
                <li key={user.id}>Gender: {user.gender}</li>
                   
            </ul>
        </div>
        <h3>Looks:</h3>
        <ul className="list-user">
                <li key={user.id}>Height: {user.height}</li>
                <li key={user.id}>Weight: {user.weight}</li>
                <li key={user.id}>Eye color: {user.eyeColor}</li>
                <li key={user.id}>Blood group: {user.bloodGroup}</li>
                <li key={user.id}>Hair color: {user.hair.color}</li>
                <li key={user.id}>Hair type: {user.hair.type}</li>
        </ul>
        <h3>Address of residence:</h3>
        <ul className="list-user"> 
            <li key={user.id}>Address: {user.address.address}</li>
            <li key={user.id}>City: {user.address.city}</li>
            <li key={user.id}>Postal code: {user.address.postalCode}</li>
            <li key={user.id}>State: {user.address.state}</li>
        </ul>
        <h3>Education:</h3>
        <ul className="list-user"> 
            <li key={user.id}>University: {user.university}</li>
            <li key={user.id}>City: {user.address.city}</li>
            <li key={user.id}>Postal code: {user.address.postalCode}</li>
            <li key={user.id}>State: {user.address.state}</li>
            <li key={user.id}>{user.bank.cardNumber}</li>
            <li key={user.id}>{user.company.address.address}</li>
            <li key={user.id}>{user.company.address.city}</li>
            <li key={user.id}>{user.company.department}</li>
            <li key={user.id}>{user.company.name}</li>
            <li key={user.id}>{user.company.title}</li>
        </ul>
        <h3>Work:</h3>
        <ul className="list-user"> 
            <li key={user.id}>Name: {user.company.name}</li>
            <li key={user.id}>Title: {user.company.title}</li>
            <li key={user.id}>Department: {user.company.department}</li>
            <li key={user.id}>Address: {user.company.address.address}</li>
            <li key={user.id}>City: {user.company.address.city}</li>
            <li key={user.id}>Postal code: {user.company.address.postalCode}</li>
            <li key={user.id}>State: {user.company.address.state}</li>
        </ul>
        <h3>Bank:</h3>
        <ul className="list-user"> 
            <li key={user.id}>Card number: {user.bank.cardNumber}</li>
            <li key={user.id}>Currency: {user.bank.currency}</li>
            <li key={user.id}>Card type: {user.bank.cardType}</li>
        </ul>
        <Link to="/users" className="link-back">Back to Users</Link>
      </div>
    );
  };
  
  export default User;