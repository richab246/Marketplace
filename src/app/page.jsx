import {Content} from "@/components/Content"
import SearchBar from "@/components/SearchBar"
import prisma from '@/lib/prismadb';

async function getModels() {
  const models = await prisma.model.findMany();
  return models;
}

const Home = async () => {

  const models = await getModels()

  return (
    <section className='w-full flex-center flex-col'>
      <div className="blue_gradient">AI Powered Marketplace</div>
      <p className="desc">
      Marketplace is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
      </p>
      <SearchBar />
      <Content models = {models}/>
    </section>
  )
}

export default Home
