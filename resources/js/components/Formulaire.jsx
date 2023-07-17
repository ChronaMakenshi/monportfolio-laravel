import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function Formulaire() {
    return (
        <Card  color="transparent" shadow={false}>
            <Typography  className="text-5xl font-body text-red-400">
                Contact
            </Typography>
            <Typography className="mt-1  text-blue-300 font-normal">
                Vous pouvez me contacter ici.
            </Typography>
            <form action=""  onSubmit={handleSubmit} method="post" enctype="multipart/form-data" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-full ">
                <div className="mb-4 flex flex-col gap-6 ">
                    <Input  label="Votre nom et prénom" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50 "/>
                    <Input  type="email" label="Votre adresse E-mail" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50"/>
                    <Textarea  label="Votre message" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50"/>
                </div>
                <div className="flex justify-center">
                    {/*<HCaptcha*/}
                    {/*    sitekey="your-sitekey"*/}
                    {/*    onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}*/}
                    {/*/>*/}
                </div>
                <Button type="submit" className="mt-6 mx-auto border border-white font-body w-32 bg-dark hover:bg-blue-800" fullWidth>
                    Envoyer
                </Button>
            </form>
        </Card>
    );
}