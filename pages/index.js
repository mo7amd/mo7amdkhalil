import SiteCTA from "../components/siteCTA"
import BlogWidget from '../components/blogWidget'
import SiteBanner from '../components/siteBanner'

export default function Home() {
  return (
    <>
      <SiteBanner
        title="Hey, I&apos;m khalil."
        subTitle="Software Engineer from Alexandria, EG.
        I create Beautiful looking and high performance web apps to help businesses do better online."
        contentPosition="left"
        figure
      />
      <BlogWidget />
      <SiteCTA />
      <section>
        <h2>
          Featured Project
        </h2>
      </section>
    </>
  )
}
