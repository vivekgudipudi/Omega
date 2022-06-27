import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { ExploreReducer }   from "../reducers/explore-reducer";
import axios from 'axios';

const ExploreContext = createContext([]);

const ExploreProvider = ({children}) => {

    const [{category},dispatch] = useReducer(ExploreReducer, {
        category : "",
      });
      
      const VideoData = ()=>{
        const [data,setData] = useState([]);
        const fetchData = async ()=>{
            try{
                const getData = await axios.get('/api/videos')
                setData(getData.data.videos);

            }
            catch(error){
                console.log(error.response)
            }
        }
        useEffect(() => {
            fetchData();
          }, []);
        return data;
      }
    const data = VideoData();

    const getFilteredData = (data, {category} ) => {
        
        if(category === 'MOBILES'){
          return data.filter((a)=> a.category === 'mobiles')
        }
        if(category === 'LAPTOPS'){
          return data.filter((a)=>a.category === 'laptops')
        }
        if(category === 'GADGETS'){
          return data.filter((a)=>a.category === 'gadgets')
        }
        return data
    };
   
    const filteredData = getFilteredData(data,{category})


      return(
        <ExploreContext.Provider value={{dispatch,data,filteredData}}>
            {children}
        </ExploreContext.Provider>
      )
}

const UseExplore = ()=> useContext(ExploreContext);

export { UseExplore,ExploreProvider}