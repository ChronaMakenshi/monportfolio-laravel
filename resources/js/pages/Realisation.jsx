import CarouselRealisation from "../components/CarouselRealisation";

function Realisation() {
    return (
        <div className='h-full w-full'>
            <div className='m-5'>
                <h1 className="text-red-400 text-5xl text-center ">Mes Réalisations</h1>
                <CarouselRealisation/>
            </div>
        </div>
    );
}

export default Realisation;