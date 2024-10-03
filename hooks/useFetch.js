import { useEffect, useState } from "react";

const useFetch = (type = null, fetchJoke = false, setFetchJoke = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ei toiminut yhdellä useEffectillä, tuli niin vaikea, että tällä tyylillä oli helpompi

  // Tämä haetaan VAIN kerran, eli ei ole riippuvuustaulukoita
  useEffect(() => {
    let tmp_url = "https://official-joke-api.appspot.com/types";
    fetchUrl(tmp_url);
  }, []);

  // Tämä haetaan VAIN kun nappi on asetettuna true. fetchUrl() jälkeen nappi asetetaan false.
  useEffect(() => {
    if (type && fetchJoke) {
      let tmp_url =
        "https://official-joke-api.appspot.com/jokes/" + type + "/random";
      fetchUrl(tmp_url).then(() => setFetchJoke(false));
    }
  }, [type, fetchJoke]);

  const fetchUrl = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        // Tässä tulee response objekti, pakko muutta JSON objektiksi
        const json = await response.json();
        setData(json);
      } else {
        setError("Something went horribly wrong..");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { data, loading, error };
};

export default useFetch;
