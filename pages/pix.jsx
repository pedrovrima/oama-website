const { default: Footer } = require("@includes/footer");
const { default: Nav } = require("@includes/nav");

function Pix() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
    z<Nav />
    <div className="h-full">
      <h1>Pix</h1>
    </div>
    <Footer/>
    </div>

  );
}

export default Pix;