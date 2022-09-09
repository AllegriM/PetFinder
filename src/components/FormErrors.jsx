import { Stack, Text } from "@chakra-ui/react"

function FormErrors({ formErrors, DBerrors }) {
    return (
        <>
            {
                DBerrors !== "" ?
                    <Stack spacing={0}>
                        <Text fontSize={'sm'} color={'red.500'} px={'2'}>{DBerrors}</Text>
                    </Stack>
                    : null
            }
            {

                Object.keys(formErrors).map((fieldName, i) => {
                    if (formErrors[fieldName].length > 0) {
                        return (
                            <Stack key={i} spacing={0}>
                                <Text fontSize={'sm'} color={'red.500'} px={'2'}>{formErrors[fieldName]}</Text>
                            </Stack>
                        )
                    } else {
                        return ''
                    }
                })
            }
        </>
    )
}

export default FormErrors