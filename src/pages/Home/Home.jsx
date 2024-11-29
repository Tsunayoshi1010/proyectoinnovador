import { useEffect } from "react";
import { useGetEnterprises } from "../../hooks/queries/useGetEnterprises";
import EnterprisesCard from "../../Components/Home/Enterprises/EnterprisesCard";

const Home = () => {
  //useQuery solo se usa para hacer peticiones de tipo get
  const { data, isLoading, isError } = useGetEnterprises();

  //! manera sin usar Query tanks
  /* useEffect(()=>{

      const loadingEnterprises = async () => {
        const res = await getEnterprises()
        return res.data
      }

      loadingEnterprises()
  }, []) */

  return (
    <>
      <h4>este es el home</h4>

      {isLoading && <p>Loading enterprises...</p>}
      {!isLoading && isError && <p>Opps, something is wrong</p>}
      {!isLoading && !isError && <EnterprisesCard enterprise={data} />}
    </>
  );
};

export default Home;
