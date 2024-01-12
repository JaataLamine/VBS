import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ServicePage = () => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/service/${id}`);
        const resData = await res.json();
        setServiceDetails(resData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchService();
  }, [id]);

  if (!serviceDetails) return "";

  return (
    <div>
      <div>
        <img
          src={`http://localhost:5000/${serviceDetails.imageUrl}`}
          alt="detail service"
        />
      </div>
      <h1>{serviceDetails.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: serviceDetails.description }} />
    </div>
  );
};
