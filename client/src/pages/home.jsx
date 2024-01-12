import { Footer } from "../components/Footer";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <>
      <div className="max-w-full">
        <div className="flex items-center size-auto">
          <h1 className="flex-auto w-3/5 text-4xl ml-12 leading-normal font-bold">
            Trouver une personne qualifiee <br /> ideale pour tous vos services
            du
            <br />
            quotidien
          </h1>
          <img
            className="flex-auto w-2/5"
            src="https://images.unsplash.com/photo-1612299273045-362a39972259?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="work"
          />
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};
