import {realisationsList} from "../datas/realisationsList";
import {Carousel, Typography} from "@material-tailwind/react";

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
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {realisationsList.name}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {realisationsList.programme}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                <a className="text-info link-primary text-decoration-none"
                                   href={realisationsList.github}>GITHUB</a>
                            </Typography>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>
    );
}

export default CarouselRealisation;
