import Faq from "../components/faq/faq";
import Hero from "../components/hero";
import Overview from "../components/overview";
import Privacy from "../components/privacy";
import Rewards from "../components/rewards";
import Sponsors from "../components/sponsors";
import Timeline from "../components/timeline";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Overview />
      <Faq />
      <Timeline />
      <Rewards />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
}
