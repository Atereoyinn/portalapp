import Complain from "../components/Complain";
import { FilterContainer } from "./Approved";

const Rejected = ({sourceData}) => {

  
  const Rejects =sourceData && sourceData.length
  ?  sourceData.filter((el) =>{
    if(el.status === "rejected"){
      return el
    }
  }) : null;

  const List = Rejects.map(item => (<Complain
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

export default Rejected