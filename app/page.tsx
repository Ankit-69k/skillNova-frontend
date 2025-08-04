import Footer from "@/components/footer";
import NonDashboardNavbar from "@/components/nonDashboardNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{/* <Landing /> */}</main>
      <Footer />
    </div>
  );
}
