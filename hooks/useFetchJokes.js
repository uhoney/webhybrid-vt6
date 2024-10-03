import React, { useEffect, useState } from "react";

// URL = 'https://official-joke-api.appspot.com/jokes/:type/random'

const useFetchJokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
};
