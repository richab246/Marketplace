import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar"
import { BentoGridItem, BentoGrid } from "@/components/ui/bento-grid";
import { getModels } from "@/lib/models";

const Home = async ({searchParams}) => {

  const search = searchParams.search || '';
  const page = Number(searchParams.page) || 1;
  const { models } = await getModels({ search, page, limit: 12})
  const totalPages = Math.ceil(models.length / 12);

  return (
    <section className='w-full flex-center flex-col'>
      <div className="blue_gradient">AI Powered Marketplace</div>
      <p className="desc">
      Marketplace is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
      </p>
      <SearchBar />
      <BentoGrid className="xl:w-full lg:w-[88%] sm:w-[85%] md:mt-16 mt-10 w-3/4 p-4">
        {models?.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.subtitle}
            image={item.image}
            id={item.id}
          />
        ))}
      </BentoGrid>
      <Pagination totalPages={totalPages} currentPage={page}/>
    </section>
  )
}

export default Home
