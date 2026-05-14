import Image from "next/image";
import Header from "./components/Header";
import SectionComponent from "./components/SectionComponent";
import Footer from "./components/Footer";
import LoginPage from "./auth/login/page";
export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      
      {/* <SectionComponent/>
      <Footer/> */}

      <LoginPage/>
    </div>
  );
}
