import React, { useEffect, useState } from "react";

// Vitsityypit, mitä voi käyttää parametrina haussa
const URL = "https://official-joke-api.appspot.com/types";

const useFetchTypes = () => {
  const [jokeTypes, setJokeTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      if (response.ok) {
        // Tässä tulee response objekti, pakko muutta JSON objektiksi
        const json = await response.json();
        setJokeTypes(json);
      } else {
        setError("Something went horribly wrong..");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { jokeTypes, loading, error };
};

export default useFetchTypes;
