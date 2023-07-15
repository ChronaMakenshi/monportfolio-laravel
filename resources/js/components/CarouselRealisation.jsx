import {Button, Carousel, Typography} from "@material-tailwind/react";
import {realisationsList} from "../datas/realisationsList.jsx";

function CarouselRealisation() {

    return (
        <Carousel className="rounded-xl">
            {realisationsList.map(realisationsList =>
            <div className="relative h-full w-full">
                <img
                    src={realisationsList.image}
                    width={realisationsList.width}
                    height={realisationsList.height}
                    alt={realisationsList.name}
                    className="object-cover m-auto"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-3/4">
                        <Typography
                            className="mb-4 font-title text-white text-3xl md:text-4xl lg:text-5xl"
                        >
                            <span
                           className="text-blue-900">&lt;
                            </span>
                            {realisationsList.name}
                            <span
                            className="text-blue-900">&gt;
                           </span>
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {realisationsList.programme}
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                <a
                                   href={realisationsList.github}>GITHUB</a>
                            </Button>
                            {realisationsList.site ? (
                            <Button size="lg" color="white" >
                                <a
                                   href={realisationsList.site}>SITE</a>
                            </Button>) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            )}
        </Carousel>
    );
}

export default CarouselRealisation;
