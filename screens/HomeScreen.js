import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "Testing", // to change header title
            headerShown: false, // to remove and hide header part
        });
    }, []);

    return (
        // safeArea view header ke niche ke text ko kharab hon se rokega like prevent from danger zone
        <SafeAreaView ClassName="bg-white pt-5">
                {/* Header */}
                <View ClassName="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        ClassName="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                    <View ClassName="flex-1">
                        <Text ClassName="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>

                        <Text ClassName="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CC88" />
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CC88" />
                </View>

                {/* Search */}
                <View ClassName="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                    <View ClassName="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <SearchIcon color="gray" size={20} />
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsIcon color="#00CC88" />
                </View>

                {/* Body */}
                <ScrollView ClassName="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                >
                    {/* Categories */}
                    <Categories/>

                    {/* featured rows */}
                    
                </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
