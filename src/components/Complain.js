import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Span = styled.span`
  margin: 2px;
  padding: 3px;
  font-weight: bold;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  padding: 5px;
  margin: auto;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  font-size: 20px;
  margin: 10px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const statusStyle = (status) => {
  if (status == "approved") {
    return {
      color: "green",
    };
  } else if (status == "rejected") {
    return { color: "red" };
  } else {
    return { color: "orange" };
  }
};

const Complain = ({ status, desc, author, title }) => {
  return (
    <Div>
      <Title>{typeof title == "string" ? title.toUpperCase() : title}</Title>
      <P>{desc}</P>
      <Section>
        <P>
          Posted By:
          <Span>
            {typeof author == "string" ? author.toUpperCase() : author}
          </Span>
        </P>
        <P>
          Request Status:
          <Span style={statusStyle(status)}>
            {" "}
            {typeof status == "string" ? status.toUpperCase() : status}
          </Span>
        </P>
      </Section>
    </Div>
  );
};

export default Complain;
