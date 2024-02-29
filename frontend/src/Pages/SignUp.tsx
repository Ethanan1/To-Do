import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onChangeEmail = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onChangeUsername = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onChangePassword = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onChangePassword = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onSubmit = () => {
        console.log("NAME", name);
        console.log("EMAIL:", email);
        console.log("USERNAME:", username);
        console.log("PASSWORD:", password);
    }

    return (
        <Box>
            <Text textAlign="center" mb={4} fontSize={20}>Create an Account</Text>
            <Box
            maxW="75%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="0 auto"
            gap={4}
            >
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Name: </Text>
                    <Input type="text" />
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Email Address: </Text>
                    <Input type="email" />
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Username: </Text>
                    <Input type="text" />
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Password: </Text>
                    <Input type="password" />
                </Box>
                <Button w="100">Submit</Button>
            </Box>
        </Box>
    )
}

export default SignUp;
