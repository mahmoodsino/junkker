import { DashboardMainSection } from "../components";
import withAuth from "../helper/with-auth";

function Home() {
  return (
    <div >
      <DashboardMainSection /> 
    </div>
  )
}


export default withAuth(Home)