import axios from "axios";


export const getCitiesCo = () => {
    const cities = async () => {
        try {
          const res = await axios.get("https://api-colombia.com/api/v1/city");
          return res.data;
        } catch (error) {
          console.error(error);
        }
      };
      return cities()
}