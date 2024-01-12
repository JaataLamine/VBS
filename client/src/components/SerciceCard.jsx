import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ _id, name, description, imageUrl }) => {
  return (
    <>
      <Link to={`/service/${_id}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={`http://localhost:5000/${imageUrl}`}
            alt="service-image"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <h3 className="mt-4 text-2xl font-medium text-white">{name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {description}
          </p>
        </div>
      </Link>
    </>
  );
};
