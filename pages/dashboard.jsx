import Container from "../components/Container";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
      <div>
        <div className="flex w-screen h-screen" >
          <Sidebar />
          <div className="w-screen ">
            <Container />
          </div>
        </div>
  
      </div>
    )
  }