import Faq from "../components/faq/faq";
import Hero from "../components/hero";
import Overview from "../components/overview";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <Overview />
        <Faq />
        <Timeline />
    </div>
  )
}
