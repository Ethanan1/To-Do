import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import axios from 'axios';


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
        setEmail(e.target.value);
    }

    const onChangeUsername = (e: any) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    const onChangePassword = (e: any) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const onSubmit = () => {
        axios
        .post("http://localhost:3005/auth/sign-up", {
            name,
            email,
            username,
            password,
        }).then((response: any) => { // You can declare 'response' as 'any' or use the actual type if you know it
            console.log('RESPONSE', response);
        }).catch((error: any) => {
            console.error('ERROR', error);
        });
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
                    <Input type="text" onChange={onChangeName} />
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Email Address: </Text>
                    <Input type="email" onChange={onChangeEmail}/>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Username: </Text>
                    <Input type="text" onChange={onChangeUsername}/>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} w="100">
                    <Text>Password: </Text>
                    <Input type="password" onChange={onChangePassword}/>
                </Box>
                <Button w="100" onClick={onSubmit}>Submit</Button>
            </Box>
        </Box>
    )
}

export default SignUp;
