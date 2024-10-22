import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// Funktion, um alle Korrekturfaktoren zu laden
export function UseCorrectionFactors() {
  const [correctionFactors, setCorrectionFactors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCorrectionFactors() {
      try {
        const response = await axios.get('http://localhost:5001/correctionfactors');
        setCorrectionFactors(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCorrectionFactors();
  }, []);

  return { correctionFactors, loading, error };
}

// Beispiel für einen einzelnen Korrekturfaktor
export function UseCorrectionFactorById() {
  const [correctionFactors, setCorrectionFactor] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { user } = useAuth0()
const id = user.email

useEffect(() => {
if (id) {
 Promise.all([
 
   fetch(`http://localhost:5001/api/correctionfactors/${id}`).then((res) => res.json())
 ]).then(([ correctionFactorData]) => {

   setCorrectionFactor(correctionFactorData);
 });
 
}
}, [id]);
 

  return { correctionFactors };

}
