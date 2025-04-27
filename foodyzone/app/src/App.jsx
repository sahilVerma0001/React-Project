import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() =>{
    const fetchfooddata = async () =>{
      try {
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
        setData(json);
        setFilterData(json);
      } catch (error) {
        setError("Unable to fetch Data");
      } finally {
        setLoading(false);
      }
    }
    fetchfooddata();
  }, []);


  const searchFood = (event) =>{
    const searchValue = event.target.value;
    if (!data) return;
    if(searchValue === ""){
      setFilterData(data);
      return;
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if(type === "all"){
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);

  }

  const filterBtn = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ]

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody one.svg" alt="logo" />
          </div>
          <div className="search">
            <input type="text" onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtn.map((value) =>(
            <Button isselected={selectedBtn === value.type.toString()} key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
          ))}
        </FilterContainer>
        <SearchResult data={filterData}/>
    </Container>
  )
};

export default App;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      height: 40px;
      border-radius: 5px;
      color: white;
      padding: 0 10px;
      font-size: 16px;
      &::placeholder {
        color:white;
      }
    }
  }

  @media (0 < width < 600px){
    flex-direction: column;
  }

`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
`;
export const Button = styled.button`
  background-color: ${({ isselected }) => (isselected ? "#ea2b2b" : "#ff4343")};
  outline: 1px solid ${({ isselected }) => (isselected ? "#ffffff" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #ea2b2b;
  }
`;