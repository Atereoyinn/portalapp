import styled from "styled-components";
import Complain from "./Complain";

const ComplainListContainer = styled.div`
width: 100vw;
`
const ComplaintList = ({ sourceData }) => {
  const List =
    sourceData && sourceData.length
      ? sourceData.map((item) => (
          <Complain
            key={item._id}
            author={item.name}
            status={item.status}
            desc={item.request}
            title={item.title}
          />
        ))
      : null;

  return <ComplainListContainer>{List}</ComplainListContainer>;
};

export default ComplaintList;
