import axios from "axios";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [location, setLocation] = useState("Detecting...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json");
        if (!response.ok) throw new Error("Failed to fetch location");

        setLocation(response.data.country);
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation("Unknown");
      }
    };

    fetchLocation();
  }, []);

  return <div> {location}</div>;
};

export default LocationDetector;
