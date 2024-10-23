import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// Funktion, um alle Korrekturfaktoren zu laden
export function UseInsulinFactors() {
  const [insulinFactors, setInsulinFactors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCorrectionFactors() {
      try {
        const response = await axios.get('http://insulinapp-api.vercel.app/dayTimeFactors');
        setInsulinFactors(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCorrectionFactors();
  }, []);

  return { insulinFactors, loading, error };
}

// Beispiel für einen einzelnen Korrekturfaktor
export function UseInsulinFactorById() {
  const [insulinFactor, setInsulinFactor] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { user } = useAuth0()
const id = user.email

useEffect(() => {
if (id) {
 Promise.all([
 
   fetch(`http://insulinapp-api.vercel.app/api/dayTimeFactors/${id}`).then((res) => res.json())
 ]).then(([ insulinFactorData]) => {

  setInsulinFactor(insulinFactorData);
 });
 
}
}, [id]);
 

  return { insulinFactor };

}

