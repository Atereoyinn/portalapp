import styled from "styled-components";
import Complain from "../components/Complain"

export const FilterContainer = styled.div`
height: 100vh;
`
const Approved = ({sourceData}) => {

  const Approve =sourceData && sourceData.length
  ?  sourceData.filter((el) =>{
    if(el.status === "approved"){
      return el
    }
  }) : null;

  const List = Approve.map(item => (<Complain
    key={item._id}
    status={item.status}
    desc={item.request}
    author={item.name}
    title={item.title}
  /> )  
  );

  return (
    <FilterContainer>{List}</FilterContainer>
  )
}

export default Approved