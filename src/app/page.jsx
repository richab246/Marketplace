import {Content} from "@/components/Content"
import SearchBar from "@/components/SearchBar"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <div className="blue_gradient">AI Powered Marketplace</div>
      <p className="desc">
      Marketplace is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
      </p>
      <SearchBar />
      <Content />
    </section>
  )
}

export default Home
