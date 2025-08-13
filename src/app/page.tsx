import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Home | Benvenuto Club Sanremo`,
  };
};

const Home = () => {
  return (
    <>
      <h1>Benvenuto Club Sanremo</h1>\
      <p>Welcome to the Benvenuto Club Sanremo!</p>
    </>
  );
};

export default Home;
