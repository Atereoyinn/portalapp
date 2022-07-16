import Complain from "../components/Complain";
import {FilterContainer} from "./Approved"

const Pending = ({sourceData}) => {

  const Pend = sourceData && sourceData.length
  ?  sourceData.filter((el) =>{
    if(el.status === "pending"){
      return el
    };
  }) : null;

  const List = Pend.map(item => (<Complain
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

export default Pending