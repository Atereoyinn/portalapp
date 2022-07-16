import ComplaintList from "../components/ComplaintList"

const Home = ({sourceData}) => {
  return (
    <div><ComplaintList sourceData={sourceData}/></div>
  )
}

export default Home