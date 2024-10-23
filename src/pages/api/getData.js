import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// Funktion, um alle Insulindaten für den eingeloggten Benutzer zu laden
export function UseInsulinData() {
  const [insulinData, setInsulinData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { user } = useAuth0(); // Benutzerdaten von Auth0
  const userid = user.email
  console.log(userid)

  // useEffect(() => {
  //   async function fetchInsulinData() {
  //     try {
  //       const response = await axios.get(`http://localhost:5001/api/insulindata?userMail=${user.email}`);
  //       setInsulinData(response.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   if (user) {
  //     fetchInsulinData(); // API-Aufruf starten, wenn der Benutzer eingeloggt ist
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      fetch(`http://insulinapp-api.vercel.app/api/insulindata?userMail=${user.email}`)
        .then((response) => response.json())
        .then((insulinData) => setInsulinData(insulinData));
    }
  }, [user]);
  return { insulinData };
}

