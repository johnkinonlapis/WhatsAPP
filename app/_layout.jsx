import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
const MainLayout = () => {
    return (

        <Stack>
            <Stack.Screen name='index' option={{
                headerShown:true
            }} />
        </Stack>
    )
}

export default MainLayout