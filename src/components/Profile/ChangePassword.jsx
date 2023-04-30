import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'; 

const ChangePassword = ()=>{
    const [oldpassword,setOldPassword] = useState("");
    const [newpassword,setNewPassword] = useState("");
return(
    <Container py="16" minH={'90vh'}>
        <form>
            <Heading  textTransform={'uppercase'}  children="Change Password" my="16" textAlign={['center','left']}/>

            <VStack spacing={"8"}>
            <Input required  value={oldpassword} onChange={e => setOldPassword(e.target.value)} placeholder="Enter old Password" type={'password'} focusBorderColor="yellow.500"/>
            <Input required  value={newpassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter new Password" type={'password'} focusBorderColor="yellow.500"/>
            <Button w ="full" colorScheme={'yellow'} type="submit">Change</Button>
            </VStack>

        </form>
    </Container>
)
};

export default ChangePassword;