import { usePage, useForm } from "@inertiajs/inertia-react";
import {
    Alert,
    Card,
    Input,
    Textarea,
    Button,
    Typography, checkbox,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha'
export default function Formulaire(props) {
    const { flash } = usePage().props
    const [open, setOpen] = React.useState(true);

    const { reset, data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        message: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/Contact')
        reset()
    }

    return (
        <Card  color="transparent" shadow={false}>
            { flash.success && (
                <React.Fragment>
                    <Alert
                        open={open}
                        color="green"
                        className="max-w-screen-md my-5"
                        icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                        onClose={() => setOpen(false)}
                    >
                        <Typography className="font-body" variant="h5" color="white">
                            { flash.success }
                        </Typography>
                    </Alert>
                </React.Fragment>
            )}
                <Typography  className="text-5xl font-body text-red-400">
                    Contact
                </Typography>
                <Typography className="mt-1  text-blue-300 font-normal">
                    Vous pouvez me contacter ici.
                </Typography>
                <form  onSubmit={handleSubmit} enctype="multipart/form-data" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-full ">
                    <div className="mb-4 flex flex-col gap-6 ">
                        <Input  id="name" name="name"  value={data.name} onChange={e => setData('name', e.target.value)} label="Votre nom et prénom" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50 "/>
                        {errors.name &&
                        <Alert className="p-2" color="red"  variant="outlined">
                            {errors.name}
                        </Alert>
                      }
                        <Input   id="email" name="email"  value={data.email} onChange={e => setData('email', e.target.value)} type="email" label="Votre adresse E-mail" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50"/>
                        {errors.email &&
                            <Alert color="red"  className="p-2" variant="outlined">
                                {errors.email}
                            </Alert>
                        }
                        <Textarea  id="message" name="message"  value={data.message}  onChange={e => setData('message', e.target.value)} label="Votre message" className="hover:border-2 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50"/>
                        {errors.message &&
                            <Alert color="red"  className="p-2" variant="outlined">
                                {errors.message}
                            </Alert>
                        }
                    </div>
                    <div className="flex justify-center">
                        <HCaptcha
                            sitekey={import.meta.env.VITE_YOUR_SITE_KEY}
                            onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                        />
                    </div>
                    <Button type="submit"  className="mt-6 mx-auto border border-white font-body w-32 bg-dark hover:bg-blue-800" fullWidth>
                        Envoyer
                    </Button>
                </form>
            </Card>
    )
}