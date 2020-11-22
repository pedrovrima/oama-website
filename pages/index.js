import Nav from '../components/nav'

export default function IndexPage() {
  return (
<>
    <Nav />

<div className="bg-gradient-to-br from-orange-600  to-amber-300 py-20 min-h-screen">
      <div className="grid grid-cols-4 p-6 grid-rows-4 h-screen gap-4 ">
        <div className="row-start-1 row-span-1 col-start-1 col-span-3 rounded-md   border-black border-2 border-solid"></div>
        <div className="row-start-1 row-span-1 col-start-4 col-span-1 rounded-md  border-black border-2 border-solid"></div>
        <div className="row-start-2 row-span-1 col-start-3 col-span-1 rounded-md   border-black border-2 border-solid"></div>
        <div className="row-start-2 row-span-2 col-start-4 col-span-1 rounded-md  border-black border-2 border-solid"></div>


        <h1 className="row-start-2 row-span-2 col-start-1 col-span-2 overflow-hidden text-5xl text-left text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
    </div>
    </>
  )
}
