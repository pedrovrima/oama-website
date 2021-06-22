export default function Title(props) {
return(    <div className="mt-16">
    <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
{props.title}    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    </div>
    )
}